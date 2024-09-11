import { Box, VStack, HStack, Button } from "@chakra-ui/react";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { useColors } from "@/shared/hooks/useColors";

interface BaseArticleFormProps {
  submitHandler: () => void;
  onClose: () => void;
  isPending: boolean;
  children: React.ReactNode;
}

export const BaseArticleForm: React.FC<BaseArticleFormProps> = ({
  submitHandler,
  onClose,
  isPending,
  children,
}) => {
  const colors = useColors();
  const {
    formState: { isValid },
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
        {children}

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
