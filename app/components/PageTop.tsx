import { Box, Center, Text } from "@yamada-ui/react";

export const PageTop = () => {
  return (
    <>
      <Box marginBottom={"52"} />
      {/* 真ん中に来るように */}
      <Center>
        <Text>顔をマスクする</Text>
      </Center>
      <Center>
        <Box border={"3px solid black"} padding={"120px"} marginBottom={"3xl"}>
          <Text>ここに画像をドラッグ&ドロップしてください</Text>
        </Box>
      </Center>
    </>
  );
};
