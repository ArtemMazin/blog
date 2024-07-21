import { Container } from "@chakra-ui/react";
import { UIHeader } from "@/shared/ui/ui-header";
import { Suspense } from "react";
import { ResetConfirm } from "./ui/reset-confirm";

export default function SearchPage() {
  return (
    <Container maxW="8xl" className="h-screen p-10">
      <UIHeader />
      <Suspense>
        <ResetConfirm />
      </Suspense>
    </Container>
  );
}
