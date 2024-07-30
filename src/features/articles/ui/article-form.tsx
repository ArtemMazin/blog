import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
  Icon,
  Text,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { messages } from "@/features/auth/constants";
import { DropZone } from "../../../shared/ui/drop-zone";
import { FileText, Image } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";
import { useProfile } from "@/features/profile/hooks/useProfile";

type TArticleFormProps = {
  submitHandler: () => void;
  onClose: () => void;
  isPending: boolean;
};

export const ArticleForm = ({
  submitHandler,
  onClose,
  isPending,
}: TArticleFormProps) => {
  const colors = useColors();

  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  const user = useProfile();

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
          <FormLabel>
            <HStack>
              <Icon as={FileText} color={colors.primaryColor} />
              <Text fontWeight="bold">Название статьи</Text>
            </HStack>
          </FormLabel>
          <Input
            type="text"
            placeholder="Введите название статьи"
            {...register("title", {
              required: messages.ERROR_FORM_REQUIRED,
            })}
            borderColor={colors.borderColor}
            _focus={{ borderColor: colors.primaryColor }}
          />
          <UIFormErrorMessage>
            {errors.title?.message?.toString() || ""}
          </UIFormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>
            <HStack>
              <Icon as={FileText} color={colors.primaryColor} />
              <Text fontWeight="bold">Текст статьи</Text>
            </HStack>
          </FormLabel>
          <Textarea
            placeholder="Введите текст статьи"
            {...register("content", {
              required: messages.ERROR_FORM_REQUIRED,
            })}
            minHeight="200px"
            borderColor={colors.borderColor}
            _focus={{ borderColor: colors.primaryColor }}
          />
          <UIFormErrorMessage>
            {errors.content?.message?.toString() || ""}
          </UIFormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>
            <HStack>
              <Icon as={Image} color={colors.primaryColor} />
              <Text fontWeight="bold">Изображение</Text>
            </HStack>
          </FormLabel>
          <DropZone name="image" />
          <input
            type="file"
            {...register("image")}
            style={{
              width: 0,
              height: 0,
              opacity: 0,
              position: "absolute",
              zIndex: -1,
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel>
            <HStack>
              <Icon as={FileText} color={colors.primaryColor} />
              <Text fontWeight="bold">Премиум статья</Text>
            </HStack>
          </FormLabel>
          <Checkbox
            {...register("isPremium")}
            colorScheme="blue"
            disabled={!user.data?.isPremium}
          >
            Сделать статью премиум
          </Checkbox>
        </FormControl>

        <HStack mt={4} justify="flex-end">
          <Button
            onClick={onClose}
            variant="outline"
            borderColor={colors.borderColor}
            color={colors.textColor}
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
            Отправить
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
