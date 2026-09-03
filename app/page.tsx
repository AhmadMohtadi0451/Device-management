import { Suspense } from "react";
import Home from "./homeClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
