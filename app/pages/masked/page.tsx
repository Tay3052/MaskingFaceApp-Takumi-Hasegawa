"use client";

import { Box, Center, Text, Flex, Button } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
export default function Masked() {
  const router = useRouter();
  return (
    <>
      <Box marginBottom={"44"} />
      <Center>
        <Box
          border={"3px solid black"}
          padding={"120px"}
          marginBottom={"3xl"}
          borderRadius={"2xl"}
        >
          <Text>ここに画像をドラッグ&ドロップしてください</Text>
        </Box>
      </Center>
      <Center>
        <Flex justifyContent={"center"}>
          <Button colorScheme="primary" onClick={() => router.push("/")}>
            画像を送信
          </Button>
        </Flex>
      </Center>
    </>
  );
}
