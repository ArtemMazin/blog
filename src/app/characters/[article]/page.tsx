import Article from "@/features/articles/ui/article";
import Sidebar from "@/features/articles/ui/article-sidebar";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIMain } from "@/shared/ui/ui-main";
import { Container } from "@chakra-ui/react";
import * as React from "react";

export default function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  return (
    <Container maxW="8xl" className="p-10">
      <UIHeader />

      <UIMain className="flex gap-10">
        <Sidebar />
        <Article id={params.article} type="characters" />
      </UIMain>
    </Container>
  );
}
