import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search } from "lucide-react";
import * as React from "react";

export interface ISearchProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function SearchGroup(props: ISearchProps) {
  return (
    <InputGroup>
      <Input placeholder="Поиск" />
      <InputRightElement>
        <Search size={"20px"} />
      </InputRightElement>
    </InputGroup>
  );
}
