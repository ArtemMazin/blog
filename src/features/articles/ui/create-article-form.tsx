import { UIButton } from "@/shared/ui/ui-button";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";

export interface ICreateArticleFormProps {}

export function CreateArticleForm(props: ICreateArticleFormProps) {
  const {
    control,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      content: "",
      image: "",
    },
  });

  return (
    <form className="w-full flex flex-col gap-4">
      <FormControl>
        <FormLabel>Название</FormLabel>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input type="text" placeholder="Название статьи" {...field} />
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Текст</FormLabel>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Textarea placeholder="Текст статьи" {...field} />
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Изображение</FormLabel>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <Input type="text" placeholder="Ссылка на изображение" {...field} />
          )}
        />
      </FormControl>

      <UIButton type="submit">Отправить</UIButton>
    </form>
  );
}
