import { Flex, Button, Box, Center, Text } from "@yamada-ui/react";
import { PageTop } from "./components/PageTop";

export default function Home() {
  return (
    <>
      <PageTop />

      <Center>
        <Flex justifyContent={"space-around"}>
          <Button marginRight={"3xl"}>画像を送信</Button>
          <Button>画像を削除</Button>
        </Flex>
      </Center>
    </>
  );
}
