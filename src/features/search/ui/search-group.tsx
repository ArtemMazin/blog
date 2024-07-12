import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

export interface ISearchProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function SearchGroup(props: ISearchProps) {
  const [value, setValue] = React.useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      goToSearch(e);
    }
  };

  const goToSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/search" + "?" + createQueryString("query", value));
    setValue("");
  };

  return (
    <InputGroup>
      <Input
        placeholder="Поиск"
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <InputRightElement>
        <Search size={"20px"} cursor={"pointer"} onClick={goToSearch} />
      </InputRightElement>
    </InputGroup>
  );
}
