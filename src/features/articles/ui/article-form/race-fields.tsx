import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const RaceFields: React.FC = () => {
  const { register } = useFormContext();

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
        <Textarea {...register("knownRepresentatives")} />
      </FormControl>
    </>
  );
};
