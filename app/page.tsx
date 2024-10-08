"use client";

import { PageTop } from "./pages/components/uploadComponent";
import { Buttons } from "./pages/components/buttons";

export default function Home() {
  return (
    <>
      {/* ページコンポーネントを使用 */}
      <PageTop />
      <Buttons />
    </>
  );
}
