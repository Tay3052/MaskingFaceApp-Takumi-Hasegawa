import { Box, Center, Text, Flex } from "@yamada-ui/react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useSetImage } from "../functions/imagesContext";

export const PageTop = () => {
  const [photo, setPhoto] = useState<Blob | null>(null);

  const setImage = useSetImage();
  const onDrop = (files: Blob[]) => {
    setPhoto(files[0]);
    const img = URL.createObjectURL(files[0]); // 画像のURLを生成
    setImage(img);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {/* 真ん中に来るように */}
      <Center>
        <Box>
          <Flex justifyContent={"flex-start"}>顔をマスクする</Flex>
        </Box>
      </Center>

      <Center>
        <Box
          {...getRootProps()}
          marginBottom={"3xl"}
          borderRadius={"2xl"}
          style={{
            border: isDragActive ? "3px solid #222222" : "3px solid #0088cc",
            width: "800px",
            height: "600px",
          }}>
          {photo ? (
            <>
              <Center>
                <Image
                  // 画像のURLを生成
                  src={URL.createObjectURL(photo)}
                  alt="アップロード画像"
                  height={300}
                  width={300}
                  style={{ margin: "100px 0 0 0", border: "2px solid #333333" }}
                />
              </Center>
            </>
          ) : (
            <>
              <input {...getInputProps()} />
              <Center>
                <Text margin={"4xl"}>
                  ここに画像をドラッグ&ドロップしてください
                </Text>
              </Center>
            </>
          )}
        </Box>
      </Center>
    </>
  );
};
