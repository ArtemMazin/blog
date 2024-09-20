import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent bg="rgba(0,0,0,0.8)">
        <ModalBody
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          position="relative"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            onClick={onClose}
            className="cursor-pointer object-contain"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
