import { Button, Center, Flex } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
export const Buttons = () => {
  const router = useRouter();

  const removeImage = () => {
    
    router.push("/");
  };

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
          <Button colorScheme="primary" onClick={() => router.push("/")}>
            画像を削除
          </Button>
        </Flex>
      </Center>
    </>
  );
};
