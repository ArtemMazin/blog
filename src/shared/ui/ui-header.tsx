import { ThemeButton } from "@/features/theme/ui/ui-theme-button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Plus, Search } from "lucide-react";
import * as React from "react";
import { UIButton } from "./ui-button";

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
        <InputGroup size={"sm"}>
          <Input placeholder="Поиск" />
          <InputRightElement>
            <Search size={"20px"} />
          </InputRightElement>
        </InputGroup>

        <UIButton>
          Добавить новость <Plus size={"20px"} />
        </UIButton>
      </div>

      {children}
    </header>
  );
}
