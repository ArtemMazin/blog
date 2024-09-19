import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
  Icon,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { messages } from "@/features/auth/constants";
import { DropZone } from "../../shared/ui/drop-zone";
import { User, FileText, Image } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

type TProfileFormProps = {
  submitHandler: () => void;
  onClose: () => void;
  isPending: boolean;
};

export const ProfileForm = ({
  submitHandler,
  onClose,
  isPending,
}: TProfileFormProps) => {
  const colors = useColors();

  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  return (
    <Box
      as="form"
      onSubmit={submitHandler}
      bg={colors.bgColor}
      borderRadius="lg"
      p={6}
      boxShadow="md"
    >
      <VStack spacing={6} align="stretch">
        <FormControl>
          <HStack spacing={2} mb={2}>
            <Icon as={User} color={colors.primaryColor} />
            <FormLabel m={0}>Имя</FormLabel>
          </HStack>
          <Input
            type="text"
            placeholder="Введите ваше имя"
            {...register("name", {
              required: messages.ERROR_FORM_REQUIRED,
            })}
            borderColor={colors.borderColor}
            _hover={{ borderColor: colors.primaryColor }}
            _focus={{ borderColor: colors.primaryColor, boxShadow: "outline" }}
          />
          <UIFormErrorMessage>
            {errors.name?.message?.toString() || ""}
          </UIFormErrorMessage>
        </FormControl>

        <FormControl>
          <HStack spacing={2} mb={2}>
            <Icon as={FileText} color={colors.primaryColor} />
            <FormLabel m={0}>О себе</FormLabel>
          </HStack>
          <Textarea
            placeholder="Расскажите о себе"
            {...register("about")}
            borderColor={colors.borderColor}
            _hover={{ borderColor: colors.primaryColor }}
            _focus={{ borderColor: colors.primaryColor, boxShadow: "outline" }}
            minHeight="150px"
          />
          <UIFormErrorMessage>
            {errors.about?.message?.toString() || ""}
          </UIFormErrorMessage>
        </FormControl>

        <FormControl>
          <HStack spacing={2} mb={2}>
            <Icon as={Image} color={colors.primaryColor} />
            <FormLabel m={0}>Аватар</FormLabel>
          </HStack>
          <DropZone name="avatar" />
          <input
            type="file"
            {...register("avatar")}
            style={{
              width: 0,
              height: 0,
              opacity: 0,
              position: "absolute",
              zIndex: -1,
            }}
          />
        </FormControl>

        <HStack justify="flex-end">
          <Button
            onClick={onClose}
            variant="outline"
            borderColor={colors.borderColor}
            color={colors.textColor}
            _hover={{ bg: colors.secondaryColor }}
          >
            Отмена
          </Button>
          <Button
            type="submit"
            disabled={!isValid}
            isLoading={isPending}
            bg={colors.primaryColor}
            color="white"
            _hover={{ bg: colors.secondaryColor }}
          >
            Сохранить
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
