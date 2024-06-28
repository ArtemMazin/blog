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

export function CreateArticleForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    control,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      content: "",
      image: "",
    },
  });

  const { mutate: createArticle } = useArticleCreate(reset, onClose);

  const onSubmit: SubmitHandler<ArticleDto> = (articleData) => {
    createArticle(articleData);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="10px">
                <FormControl>
                  <FormLabel>Название</FormLabel>
                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="text"
                        placeholder="Название статьи"
                        {...field}
                      />
                    )}
                  />
                  <UIFormErrorMessage>
                    {errors.title?.message}
                  </UIFormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Текст</FormLabel>
                  <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                      <Textarea placeholder="Текст статьи" {...field} />
                    )}
                  />
                  <UIFormErrorMessage>
                    {errors.content?.message}
                  </UIFormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Изображение</FormLabel>
                  <Controller
                    name="image"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="text"
                        placeholder="Ссылка на изображение"
                        {...field}
                      />
                    )}
                  />
                  <UIFormErrorMessage>
                    {errors.image?.message}
                  </UIFormErrorMessage>
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
}
