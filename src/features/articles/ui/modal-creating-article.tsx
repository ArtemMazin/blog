import { UIButton } from "@/shared/ui/ui-button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { useArticleCreate } from "../hooks/useArticleCreate";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { ArticleForm } from "./article-form";

export type TFormData = {
  title: string;
  content: string;
  image: FileList | null;
};

export const ModalCreatingArticle = () => {
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

  const { reset, handleSubmit } = methods;

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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Создать статью</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <ArticleForm submitHandler={submitHandler} isPending={isPending} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
