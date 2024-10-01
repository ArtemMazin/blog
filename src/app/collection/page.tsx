import { Suspense } from "react";
import { CollectionContent } from "@/features/collection/collection-content";
import { UIMain } from "@/shared/ui/ui-main";
import {
  characterArticleControllerGetAllCharacterArticles,
  ResponseCharacterArticleDto,
} from "@/shared/api/generated";

export const revalidate = 300;

async function getCharacters(): Promise<ResponseCharacterArticleDto[]> {
  const res = await characterArticleControllerGetAllCharacterArticles();
  return res.data;
}

export default async function CollectionPage() {
  const initialCharacters = await getCharacters();

  return (
    <UIMain>
      <Suspense fallback={<div>Loading...</div>}>
        <CollectionContent initialCharacters={initialCharacters} />
      </Suspense>
    </UIMain>
  );
}
