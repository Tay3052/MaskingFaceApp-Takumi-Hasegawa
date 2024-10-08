"use client";
import { Image } from "@yamada-ui/react";
import { Center, Flex, Button } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
import { useSetImage } from "@/utils/useContext/context/imageContext";
import { useRemoveImage } from "@/utils/useContext/context/imageContext";
import { useSetBoolean } from "@/utils/useContext/context/boolContext";
import { url2file } from "@/utils/functions/url2file";

export default function Masked() {
  const { image } = useSetImage();
  const router = useRouter();
  const rmImage = useRemoveImage().removeImage;
  const { setBoolean: setUploaded } = useSetBoolean();
  const removeImages = () => {
    rmImage(null);
    setUploaded(false);
    router.push("/");
  };
  const Masking = async () => {
    const apiKey: string = process.env.faceDitectApiKey || "";
    const img = await url2file(image || "", "masking.jpg");
    console.log("img:", img);

    const mask = await fetch("http://compreface/api/v1/detection/detect", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "content-type": "multipart/form-data",
      },
      body: img,
    });
    const result = await mask.json();
    console.log(result);

    return result;
  };

  const maskedImage = Masking();
  console.log("masked:", maskedImage);
  return (
    <>
      {/* <Box marginBottom={"44"} /> */}
      <Center marginBottom={"2xl"}>
        <Image
          // 画像のURLを生成
          src={image ?? ""}
          alt="アップロード画像"
          height={450}
          width={750}
          style={{
            margin: "150px 0 0 0",
            border: "2px solid #333333",
          }}
        />
      </Center>
      <Center>
        <Flex justifyContent={"center"}>
          <Button colorScheme="primary" onClick={removeImages}>
            戻る
          </Button>
        </Flex>
      </Center>
    </>
  );
}
