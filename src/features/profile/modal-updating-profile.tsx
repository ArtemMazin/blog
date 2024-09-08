import { ResponseUserDto, UpdateProfileDto } from "@/shared/api/generated";
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
import { FormProvider, useForm } from "react-hook-form";
import { useProfileUpdate } from "./hooks/useUpdateProfile";
import { ProfileForm } from "./profile-form";

type TFormData = {
  name: string;
  about?: string;
  avatar?: FileList;
};

export const ModalUpdatingProfile: React.FC<{ user: ResponseUserDto }> = ({
  user,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const methods = useForm<TFormData>({
    mode: "onBlur",
    defaultValues: {
      name: user.name || "",
      about: user.about || "",
      avatar: undefined,
    },
  });

  const { reset, handleSubmit } = methods;

  const { mutate: updateProfile, isPending } = useProfileUpdate(reset, onClose);

  const submitHandler = handleSubmit((data: TFormData) => {
    const updateData: UpdateProfileDto = {
      name: data.name,
      about: data.about,
      ...(data.avatar && { avatar: data.avatar[0] }),
    };
    updateProfile(updateData);
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
            <ProfileForm
              submitHandler={submitHandler}
              onClose={onClose}
              isPending={isPending}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
