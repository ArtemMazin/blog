import { Suspense } from "react";
import { FindedList } from "./ui/finded-list";

export default function SearchPage() {
  return (
    <Suspense>
      <FindedList />
    </Suspense>
  );
}
