"use client";

import { PageTop } from "./components/uploadComponent";
import { Buttons } from "./components/buttons";

export default function Home() {
  return (
    <>
      {/* ページコンポーネントを使用 */}
      <PageTop />
      <Buttons />
    </>
  );
}
