import { UIButton } from "@/shared/ui/ui-button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { useArticleCreate } from "../hooks/useArticleCreate";
import { FormProvider, useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { ArticleForm } from "./article-form";
import {
  CreateCharacterArticleDto,
  CreateCharacterArticleDtoGender,
  CreateCharacterArticleDtoIsPremium,
  CreateRaceArticleDto,
} from "@/shared/api/generated";

// Тип данных формы
export type TFormData = {
  title: string;
  content: string;
  isPremium: boolean;
  image: FileList | null;
  // Поля для статьи о персонаже
  characterName: string;
  birthDate?: string;
  deathDate?: string;
  gender: CreateCharacterArticleDtoGender;
  height?: string;
  homeWorld: string;
  race: string;
  // Поля для статьи о расе
  class: string;
  distinctiveFeatures: string;
  language: string;
  raceName: string;
  skinColor: string;
  type: string;
  knownRepresentatives?: string;
};

export const ModalCreatingArticle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [articleType, setArticleType] = React.useState<"characters" | "races">(
    "characters",
  );

  const methods = useForm<TFormData>({
    mode: "onBlur",
    defaultValues: {
      title: "",
      content: "",
      image: null,
      isPremium: false,
      // Поля для статьи о персонаже
      characterName: "",
      birthDate: "",
      deathDate: "",
      gender: "Другое",
      height: "",
      homeWorld: "",
      race: "",
      // Поля для статьи о расе
      class: "",
      distinctiveFeatures: "",
      language: "",
      raceName: "",
      skinColor: "",
      type: "",
      knownRepresentatives: "",
    },
  });

  const { reset, handleSubmit } = methods;

  const { mutate: createArticle, isPending } = useArticleCreate(
    articleType,
    reset,
    onClose,
  );

  const submitHandler = handleSubmit((data: TFormData) => {
    if (!data?.image?.[0]) {
      toast({
        title: "Ошибка",
        description: "Выберите изображение",
        status: "error",
      });
      return;
    }

    const isPremium: CreateCharacterArticleDtoIsPremium = data.isPremium
      ? "true"
      : "false";

    if (articleType === "characters") {
      const characterArticleData: CreateCharacterArticleDto = {
        title: data.title,
        content: data.content,
        isPremium: isPremium,
        image: data.image[0],
        characterName: data.characterName || "",
        birthDate: data.birthDate,
        deathDate: data.deathDate,
        race: data.race || "",
        gender: (data.gender as CreateCharacterArticleDtoGender) || "Другое",
        height: data.height,
        homeWorld: data.homeWorld || "",
      };
      createArticle(characterArticleData);
    } else {
      const raceArticleData: CreateRaceArticleDto = {
        title: data.title,
        content: data.content,
        isPremium: isPremium,
        image: data.image[0],
        raceName: data.raceName || "",
        type: data.type || "",
        class: data.class || "",
        skinColor: data.skinColor || "",
        distinctiveFeatures:
          data.distinctiveFeatures
            .split(",")
            .map((item) => item.trim())
            .filter((item) => item !== "") || [],
        homeWorld: data.homeWorld || "",
        language: data.language || "",
        knownRepresentatives:
          (data.knownRepresentatives &&
            data.knownRepresentatives
              .split(",")
              .map((item) => item.trim())
              .filter((item) => item !== "")) ||
          [],
      };
      createArticle(raceArticleData);
    }
  });

  return (
    <FormProvider {...methods}>
      <UIButton onClick={onOpen}>
        Добавить статью <Plus size={"20px"} />
      </UIButton>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Создать статью</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <RadioGroup
              onChange={(value) =>
                setArticleType(value as "characters" | "races")
              }
              value={articleType}
              mb={4}
            >
              <Stack direction="row">
                <Radio value="characters">Персонаж</Radio>
                <Radio value="races">Раса</Radio>
              </Stack>
            </RadioGroup>
            <ArticleForm
              submitHandler={submitHandler}
              onClose={onClose}
              isPending={isPending}
              articleType={articleType}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
