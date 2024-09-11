import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const CharacterFields: React.FC = () => {
  const { register } = useFormContext();

  return (
    <>
      <FormControl>
        <FormLabel>Имя персонажа</FormLabel>
        <Input {...register("characterName", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Дата рождения</FormLabel>
        <Input type="text" {...register("birthDate")} />
      </FormControl>
      <FormControl>
        <FormLabel>Дата смерти</FormLabel>
        <Input type="text" {...register("deathDate")} />
      </FormControl>
      <FormControl>
        <FormLabel>Пол</FormLabel>
        <Select {...register("gender", { required: true })}>
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
          <option value="Другое">Другое</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Рост</FormLabel>
        <Input {...register("height")} />
      </FormControl>
      <FormControl>
        <FormLabel>Родной мир</FormLabel>
        <Input {...register("homeWorld", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Раса</FormLabel>
        <Input {...register("race", { required: true })} />
      </FormControl>
    </>
  );
};
