import { ThemeButton } from "@/features/theme/ui/ui-theme-button";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Plus, Search } from "lucide-react";
import * as React from "react";

export interface IHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function Header({ children }: IHeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-nowrap">Лента новостей</h1>
      <div className="flex gap-6 items-center">
        <ThemeButton />
        <InputGroup size={"sm"}>
          <Input placeholder="Поиск" />
          <InputRightElement>
            <Search size={"20px"} />
          </InputRightElement>
        </InputGroup>

        <Button
          size="sm"
          colorScheme="blue"
          color={"white"}
          className="flex-none gap-1 items-center"
        >
          Добавить новость <Plus size={"20px"} />
        </Button>
      </div>

      {children}
    </header>
  );
}
