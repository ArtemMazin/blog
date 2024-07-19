import { UIButton } from "@/shared/ui/ui-button";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { messages } from "@/features/auth/constants";
import { DropZone } from "../../shared/ui/drop-zone";

type TArticleFormProps = {
  submitHandler: () => void;
  isPending: boolean;
};

export const ProfileForm = ({
  submitHandler,
  isPending,
}: TArticleFormProps) => {
  const { onClose } = useDisclosure();

  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  return (
    <form onSubmit={submitHandler}>
      <Stack spacing="10px">
        <FormControl>
          <FormLabel>Имя</FormLabel>

          <Input
            type="text"
            placeholder="Имя"
            {...register("name", {
              required: messages.ERROR_FORM_REQUIRED,
            })}
            className="p-1"
          />
          <UIFormErrorMessage>
            {errors.title?.message?.toString() || ""}
          </UIFormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>О себе</FormLabel>

          <Textarea
            placeholder="О себе"
            {...register("about", {
              required: messages.ERROR_FORM_REQUIRED,
            })}
          />

          <UIFormErrorMessage>
            {errors.content?.message?.toString() || ""}
          </UIFormErrorMessage>
        </FormControl>
        <FormControl>
          <DropZone name="avatar" />

          <input
            type="file"
            {...register("avatar")}
            className="w-px h-px opacity-0 absolute z-0"
          />
        </FormControl>
        <Button variant="outline" onClick={onClose}>
          Отмена
        </Button>
        <UIButton type="submit" disabled={!isValid} isLoading={isPending}>
          Отправить
        </UIButton>
      </Stack>
    </form>
  );
};
