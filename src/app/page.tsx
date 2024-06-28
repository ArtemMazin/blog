import { ArticleList } from "@/features/articles/ui/article-list";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-full p-12">
        <UIHeader />
        <UIMain>
          <ArticleList />
        </UIMain>
      </div>
    </div>
  );
}
