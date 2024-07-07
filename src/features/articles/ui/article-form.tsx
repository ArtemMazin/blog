import { ArticleDto } from "@/shared/api/generated";
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
} from "@chakra-ui/react";
import * as React from "react";
import { useArticleCreate } from "../hooks/useArticleCreate";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { UILogo } from "@/shared/ui/ui-logo";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";

interface CreateArticleFormProps {
  onSubmit: (formData: FormData) => void;
}

export const CreateArticleForm: React.FC<CreateArticleFormProps> = ({
  onSubmit,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    control,
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  console.log(getValues());

  const submitHandler = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    if (data.image && data.image.length > 0) {
      for (const file of data.image) {
        formData.append("image", file);
      }
    }
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
                    {...register("title")}
                  />

                  {/* <UIFormErrorMessage>
                    {errors.title?.message}
                  </UIFormErrorMessage> */}
                </FormControl>
                <FormControl>
                  <FormLabel>Текст</FormLabel>

                  <Textarea
                    placeholder="Текст статьи"
                    {...register("content")}
                  />

                  {/* <UIFormErrorMessage>
                    {errors.content?.message}
                  </UIFormErrorMessage> */}
                </FormControl>
                <FormControl>
                  <FormLabel>Изображение</FormLabel>

                  <Input type="file" {...register("image")} />

                  {/* <UIFormErrorMessage>
                    {errors.image?.message}
                  </UIFormErrorMessage> */}
                </FormControl>
                <Button variant="outline" onClick={onClose}>
                  Отмена
                </Button>
                <UIButton type="submit">Отправить</UIButton>
              </Stack>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
