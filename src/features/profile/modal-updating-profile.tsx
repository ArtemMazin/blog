import { ProfileResponseDto } from "@/shared/api/generated";
import { UIButton } from "@/shared/ui/ui-button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useProfileUpdate } from "./hooks/useUpdateProfile";
import { ProfileForm } from "./profile-form";

export type TFormData = {
  name: string;
};

export const ModalUpdatingProfile = ({
  user,
}: {
  user: ProfileResponseDto;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const methods = useForm<TFormData>({
    mode: "onBlur",
    defaultValues: {
      name: user.name,
    },
  });

  const { reset, handleSubmit } = methods;

  const { mutate: updateArticle, isPending } = useProfileUpdate(
    user._id,
    reset,
    onClose,
  );

  const onSubmit: SubmitHandler<FormData> = (articleData) => {
    updateArticle(articleData);
  };

  const submitHandler = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("name", data.name);

    // data.image && formData.append("image", data.image[0]);

    onSubmit(formData);
  });

  return (
    <FormProvider {...methods}>
      <UIButton onClick={onOpen} className="w-fit">
        Редактировать
      </UIButton>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Изменить профиль</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <ProfileForm submitHandler={submitHandler} isPending={isPending} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
