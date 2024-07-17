import { Container } from "@chakra-ui/react";
import { UIHeader } from "@/shared/ui/ui-header";
import { Suspense } from "react";
import { FindedList } from "./ui/finded-list";

export default function SearchPage() {
  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <Suspense>
        <FindedList />
      </Suspense>
    </Container>
  );
}
