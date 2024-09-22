import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { Select as ChakraSelect } from "chakra-react-select";
import { useAllArticles } from "../../hooks/useAllArticles";
import { useId } from "react";

export const RaceFields: React.FC = () => {
  const { register, control } = useFormContext();
  const selectId = useId();
  const { data: characters, isLoading } = useAllArticles("characters");

  // Преобразуем данные о персонажах в формат, подходящий для Select
  const characterOptions =
    characters?.map((character) => ({
      value: character._id,
      label: character.title,
    })) || [];

  return (
    <>
      <FormControl>
        <FormLabel>Название расы</FormLabel>
        <Input {...register("raceName", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Класс</FormLabel>
        <Input {...register("class", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Отличительные признаки</FormLabel>
        <Textarea {...register("distinctiveFeatures")} />
      </FormControl>
      <FormControl>
        <FormLabel>Планета происхождения</FormLabel>
        <Input {...register("homeWorld", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Язык</FormLabel>
        <Input {...register("language", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Цвет кожи</FormLabel>
        <Input {...register("skinColor", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Тип</FormLabel>
        <Input {...register("type", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Известные представители</FormLabel>
        <Controller
          name="knownRepresentatives"
          control={control}
          render={({ field: { onChange, value, ...rest } }) => (
            <ChakraSelect
              isMulti
              inputId={selectId}
              options={characterOptions}
              placeholder="Выберите известных представителей"
              isLoading={isLoading}
              onChange={(newValue) => {
                onChange(
                  newValue && newValue.length > 0
                    ? newValue.map((item) => item.value)
                    : null,
                );
              }}
              value={characterOptions.filter((option) =>
                Array.isArray(value) ? value.includes(option.value) : false,
              )}
              {...rest}
            />
          )}
        />
      </FormControl>
    </>
  );
};
