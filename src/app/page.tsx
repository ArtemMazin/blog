import { ArticleList } from "@/features/articles/ui/article-list";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { UISidebar } from "@/shared/ui/ui-sidebar";

export default function Home() {
  return (
    <div className="flex">
      <UISidebar />
      <div className="w-full p-12">
        <UIHeader />
        <UIMain>
          <ArticleList />
        </UIMain>
      </div>
    </div>
  );
}
