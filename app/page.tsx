import { Suspense } from "react";
import Home from "./homeClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}
