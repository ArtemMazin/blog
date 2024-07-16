import { UIButton } from "@/shared/ui/ui-button";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { useArticleDelete } from "../hooks/useArticleDelete";
import { useRouter } from "next/navigation";

export const ModalDeletingArticle = ({ id }: { id: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const { mutate: deleteArticle } = useArticleDelete(id);
  const onDelete = () => {
    deleteArticle();
    router.push("/");
  };

  return (
    <>
      <Button colorScheme="red" onClick={onOpen} className="w-fit">
        Удалить статью
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Вы уверены, что хотите удалить статью?</ModalHeader>
          <ModalCloseButton />

          <ModalBody className="flex gap-2 justify-end">
            <Button colorScheme="red" onClick={onDelete}>
              Удалить статью
            </Button>
            <Button variant="outline" onClick={onClose}>
              Отмена
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
