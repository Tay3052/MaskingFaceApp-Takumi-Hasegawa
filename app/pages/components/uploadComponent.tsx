import { Box, Center, Text, Flex } from "@yamada-ui/react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useSetImage } from "@/utils/useContext/context/imageContext";
// import { useSetBoolean } from "@/utils/useContext/context/boolContext";

export const PageTop = () => {
  const { image, setNewImage } = useSetImage();

  const onDrop = (files: Blob[]) => {
    const img = URL.createObjectURL(files[0]); // 画像のURLを生成
    setNewImage(img);
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
          {image ? (
            <>
              <Center>
                {image ? (
                  <Image
                    // 画像のURLを生成
                    src={image ?? ""}
                    alt="アップロード画像"
                    height={300}
                    width={300}
                    style={{
                      margin: "150px 0 0 0",
                      border: "2px solid #333333",
                    }}
                  />
                ) : (
                  <Text margin={"4xl"}>
                    ここに画像をドラッグ&ドロップしてください
                  </Text>
                )}
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
