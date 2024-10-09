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
      <Box marginLeft={"92"}>
        <Flex justifyContent={"flex-start"}>
          <Text>顔をマスクする</Text>
        </Flex>
      </Box>

      <Center>
        <Box
          {...getRootProps()}
          marginBottom={"2xl"}
          borderRadius={"2xl"}
          width={"60%"}
          height={"80%"}
          style={{
            border: isDragActive ? "3px solid #222222" : "3px solid #0088cc",
          }}>
          {image ? (
            <>
              <Center>
                {image ? (
                  <Box margin={"100px auto"}>
                    <Image
                      src={image ?? ""}
                      alt="アップロード画像"
                      height={640}
                      width={480}
                      style={{
                        border: "2px solid #333333",
                      }}
                    />
                  </Box>
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
