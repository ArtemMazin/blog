import { UIButton } from "@/shared/ui/ui-button";
import {
  Box,
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
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { useArticleCreate } from "../hooks/useArticleCreate";
import { SubmitHandler, useForm } from "react-hook-form";
import { FolderPlus, Plus } from "lucide-react";
import { UILogo } from "@/shared/ui/ui-logo";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { messages } from "@/features/auth/constants";

type TFormData = {
  title: string;
  content: string;
  image: FileList;
};

export const CreateArticleForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
  } = useForm<TFormData>({
    mode: "onBlur",
  });

  const { mutate: createArticle, isPending } = useArticleCreate(reset, onClose);

  const onSubmit: SubmitHandler<FormData> = (articleData) => {
    createArticle(articleData);
  };

  const submitHandler = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);

    if (data.image.length === 0) {
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
    <>
      <UIButton onClick={onOpen}>
        Добавить статью <Plus size={"20px"} />
      </UIButton>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader>
            <UILogo className="mb-20" />
          </DrawerHeader>

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
                  <Box
                    className="w-full h-32 mb-4 flex flex-col items-center justify-center border-4 border-dashed rounded-lg"
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();

                      const files = e.dataTransfer.files;

                      setValue("image", files);
                    }}
                  >
                    <FolderPlus size={40} strokeWidth={1} />
                    <Text>Перетащите изображение</Text>
                  </Box>

                  <Input
                    type="file"
                    {...register("image")}
                    className="p-1 h-auto"
                  />

                  <UIFormErrorMessage>
                    {errors.image?.message}
                  </UIFormErrorMessage>
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
    </>
  );
};
