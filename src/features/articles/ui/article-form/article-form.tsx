import * as React from "react";
import { BaseArticleForm } from "./base-form";
import { CharacterFields } from "./character-fields";
import { CommonArticleFields } from "./common-fields";
import { RaceFields } from "./race-fields";

type TArticleFormProps = {
  submitHandler: () => void;
  onClose: () => void;
  isPending: boolean;
  articleType: "characters" | "races";
};

export const ArticleForm: React.FC<TArticleFormProps> = ({
  submitHandler,
  onClose,
  isPending,
  articleType,
}) => {
  return (
    <BaseArticleForm
      submitHandler={submitHandler}
      onClose={onClose}
      isPending={isPending}
    >
      <CommonArticleFields />
      {articleType === "characters" ? <CharacterFields /> : <RaceFields />}
    </BaseArticleForm>
  );
};
