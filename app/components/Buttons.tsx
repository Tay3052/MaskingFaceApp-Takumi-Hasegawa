import { Button, Center, Flex } from "@yamada-ui/react";

export const Buttons = (nextbtn: string, backbtn: string) => {
  return (
    <>
      <Center>
        <Flex justifyContent={"space-around"}>
          <Button marginRight={"3xl"}>画像を送信</Button>
          <Button>画像を削除</Button>
        </Flex>
      </Center>
      <Center>
        <Flex justifyContent={"space-around"}>
          <Button
            marginRight={"3xl"}
            colorScheme="primary"
            onClick={() => router.push("/")}
          >
            画像を削除
          </Button>
        </Flex>
      </Center>
    </>
  );
};
