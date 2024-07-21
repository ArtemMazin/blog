"use client";

import { UIMain } from "@/shared/ui/ui-main";
import { usePasswordConfirm } from "@/features/auth/hooks/usePasswordConfirm";
import { validation } from "@/features/auth/constants";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { Button, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { InputWithPassword } from "@/features/auth/ui/input-with-password";
import { UIButton } from "@/shared/ui/ui-button";

export function ResetConfirm() {
  const {
    control,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      password: "",
    },
  });

  const { mutate: sendPassword, isPending } = usePasswordConfirm();

  const onSubmit: SubmitHandler<{ password: string }> = ({ password }) => {
    sendPassword(password);
  };

  return (
    <UIMain>
      <Heading size="lg" textAlign="center" paddingY={"10"}>
        Сброс пароля
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-96 mx-auto flex flex-col gap-4"
      >
        <FormControl isInvalid={!!errors.password}>
          <Controller
            name="password"
            control={control}
            rules={validation.password}
            render={({ field }) => <InputWithPassword {...field} />}
          />
          <UIFormErrorMessage>{errors.password?.message}</UIFormErrorMessage>
        </FormControl>
        <Button variant="outline" onClick={() => reset()}>
          Отмена
        </Button>
        <UIButton type="submit" isDisabled={!isValid} isLoading={isPending}>
          Отправить
        </UIButton>
      </form>
    </UIMain>
  );
}
