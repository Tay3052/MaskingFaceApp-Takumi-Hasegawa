import React from "react";
import { Button, Center, Flex } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
import { useRemoveImage } from "../functions/imagesContext";

export const Buttons: React.FC = () => {
  const router = useRouter();
  const setImage  = useRemoveImage();
  const removeImages = () => {
    if (setImage) {
      // 修正: removeImageが存在する場合のみ呼び出す
      setImage();
    }
    router.push("/");
  };
  return (
    <>
      {setImage ? (
        <Center>
          <Flex justifyContent={"space-around"}>
            <Button
              marginRight={"3xl"}
              colorScheme="primary"
              onClick={removeImages}>
              画像を削除
            </Button>
            <Button
              colorScheme="primary"
              onClick={() => router.push("/pages/masked")}>
              画像をマスク
            </Button>
          </Flex>
        </Center>)
      }
    </>
  );
};
