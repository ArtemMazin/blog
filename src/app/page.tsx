import { ArticleList } from "@/features/articles/ui/article-list";
import { Logo } from "@/shared/ui/ui-logo";

export default function Home() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <ArticleList />
      </main>
    </>
  );
}
