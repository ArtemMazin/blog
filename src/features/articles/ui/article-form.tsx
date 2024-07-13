import { UIButton } from "@/shared/ui/ui-button";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { useArticleCreate } from "../hooks/useArticleCreate";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { UILogo } from "@/shared/ui/ui-logo";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { messages } from "@/features/auth/constants";
import { DropZone } from "./drop-zone";

export type TFormData = {
  title: string;
  content: string;
  image: FileList | null;
};

export const CreateArticleForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const methods = useForm<TFormData>({
    mode: "onBlur",
    defaultValues: {
      title: "",
      content: "",
      image: null,
    },
  });

  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = methods;

  const { mutate: createArticle, isPending } = useArticleCreate(reset, onClose);

  const onSubmit: SubmitHandler<FormData> = (articleData) => {
    createArticle(articleData);
  };

  const submitHandler = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);

    if (!data?.image) {
      toast({
        title: "Ошибка",
        description: "Выберите изображение",
        status: "error",
      });

      return;
    }

    formData.append("image", data.image[0]);

    onSubmit(formData);
  });

  return (
    <FormProvider {...methods}>
      <UIButton onClick={onOpen}>
        Добавить статью <Plus size={"20px"} />
      </UIButton>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <form onSubmit={submitHandler}>
              <Stack spacing="10px">
                <FormControl>
                  <FormLabel>Название</FormLabel>

                  <Input
                    type="text"
                    placeholder="Название статьи"
                    {...register("title", {
                      required: messages.ERROR_FORM_REQUIRED,
                    })}
                    className="p-1"
                  />
                  <UIFormErrorMessage>
                    {errors.title?.message}
                  </UIFormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Текст</FormLabel>

                  <Textarea
                    placeholder="Текст статьи"
                    {...register("content", {
                      required: messages.ERROR_FORM_REQUIRED,
                    })}
                  />

                  <UIFormErrorMessage>
                    {errors.content?.message}
                  </UIFormErrorMessage>
                </FormControl>
                <FormControl>
                  <DropZone />

                  <input
                    type="file"
                    {...register("image")}
                    className="w-px h-px opacity-0 absolute z-0"
                  />
                </FormControl>
                <Button variant="outline" onClick={onClose}>
                  Отмена
                </Button>
                <UIButton
                  type="submit"
                  disabled={!isValid}
                  isLoading={isPending}
                >
                  Отправить
                </UIButton>
              </Stack>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </FormProvider>
  );
};
