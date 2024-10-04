import { Box, Center, Text } from "@yamada-ui/react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

export const PageTop = () => {
  const [photo, setPhoto] = useState<File | null>(null);

  const onDrop = (files: File[]) => {
    setPhoto(files[0]);
    console.log(files);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  console.log(photo);
  return (
    <>
      {/* 真ん中に来るように */}
      <Center>
        <Text>顔をマスクする</Text>
      </Center>

      <Center>
        <Box
          {...getRootProps()}
          marginBottom={"3xl"}
          borderRadius={"2xl"}
          style={{
            border: isDragActive ? "3px solid #222222" : "3px solid #ff7f50",
            width: "800px",
            height: "150px",
          }}
        >
          {photo && (
            <>
              <Image
                src={URL.createObjectURL(photo)}
                alt={""}
                height={100}
                width={100}
              />
            </>
          )}
          <input {...getInputProps()} />
          <Center>
            <Text>ここに画像をドラッグ&ドロップしてください</Text>
          </Center>
        </Box>
      </Center>
    </>
  );
};
