"use client";

import { Flex, Button, Center } from "@yamada-ui/react";
import { PageTop } from "./components/uploadComponent";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      {/* ページコンポーネントを使用 */}
      <PageTop />
      <Center>
        <Flex justifyContent={"space-around"}>
          <Button
            marginRight={"3xl"}
            colorScheme="primary"
            onClick={() => router.push("/")}
          >
            画像を削除
          </Button>
          <Button
            colorScheme="primary"
            onClick={() => router.push("/pages/uploaded")}
          >
            画像を送信
          </Button>
        </Flex>
      </Center>
    </>
  );
}
