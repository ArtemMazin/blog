import { UIButton } from "@/shared/ui/ui-button";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useDisclosure,
  VStack,
  HStack,
  Icon,
  Text,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { messages } from "@/features/auth/constants";
import { DropZone } from "../../../shared/ui/drop-zone";
import { FileText, Image } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

type TArticleFormProps = {
  submitHandler: () => void;
  isPending: boolean;
};

export const ArticleForm = ({
  submitHandler,
  isPending,
}: TArticleFormProps) => {
  const { onClose } = useDisclosure();
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

        <HStack justifyContent="space-between" mt={4}>
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
