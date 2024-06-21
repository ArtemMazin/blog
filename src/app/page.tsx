import { ArticleList } from "@/features/articles/ui/article-list";
import { Header } from "@/shared/ui/ui-header";
import { Main } from "@/shared/ui/ui-main";
import { Sidebar } from "@/shared/ui/ui-sidebar";

export default function Home() {
  return (
    <div className="p-4 flex gap-12">
      <Sidebar />
      <div className="w-full">
        <Header />
        <Main>
          <ArticleList />
        </Main>
      </div>
    </div>
  );
}
