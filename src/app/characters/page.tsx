import { UIMain } from "@/shared/ui/ui-main";
import { CharacterArticleList } from "@/features/articles/ui/article-list/character-list";
import { characterArticleControllerGetAllCharacterArticles } from "@/shared/api/generated";

async function getCharacterArticles() {
  const response = await characterArticleControllerGetAllCharacterArticles();
  return response.data;
}

export default async function CharactersPage() {
  const characterArticles = await getCharacterArticles();

  return (
    <UIMain>
      <CharacterArticleList articles={characterArticles} />
    </UIMain>
  );
}
