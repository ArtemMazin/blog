import React from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useAllArticles } from "../../hooks/useAllArticles";

export const CharacterFields: React.FC = () => {
  const { register } = useFormContext();
  const { data: raceArticles, isLoading: isLoadingRaces } =
    useAllArticles("races");

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
        <Select
          {...register("race", { required: true })}
          isDisabled={isLoadingRaces}
        >
          <option value="">Выберите расу</option>
          {raceArticles?.map((race) => (
            <option key={race._id} value={race._id}>
              {race.title}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
