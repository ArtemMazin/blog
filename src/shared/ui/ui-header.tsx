import { ThemeButton } from "@/features/theme/ui/theme-button";
import { Plus } from "lucide-react";
import * as React from "react";
import { UIButton } from "./ui-button";
import { SearchGroup } from "@/features/search/ui/search-group";

export interface IHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function UIHeader({ children }: IHeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-nowrap text-4xl font-bold">Лента новостей</h1>
      <div className="flex gap-6 items-center">
        <ThemeButton />
        <SearchGroup />
        <UIButton>
          Добавить новость <Plus size={"20px"} />
        </UIButton>
      </div>

      {children}
    </header>
  );
}
