"use client";
import { Box, Image, Center, Flex, Button } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
import { useSetImage } from "@/utils/useContext/context/imageContext";
import { useRemoveImage } from "@/utils/useContext/context/imageContext";
import { useSetBoolean } from "@/utils/useContext/context/boolContext";
import { Detect } from "@/utils/functions/detect";
import { Masking } from "@/utils/functions/masking";
import { Suspense, useState, useEffect } from "react";

interface Mask {
  probability: number;
  x_max: number;
  y_max: number;
  x_min: number;
  y_min: number;
}

const Masked = () => {
  const { image } = useSetImage();
  const router = useRouter();
  const rmImage = useRemoveImage().removeImage;
  const { setBoolean: setUploaded } = useSetBoolean();
  const removeImages = () => {
    rmImage(null);
    setUploaded(false);
    router.push("/");
  };
  const detect = async () => {
    return await Detect();
  };
  const [points, setPoints] = useState<Mask | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await detect();
      setPoints(result);
    };
    fetchData();
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Masking
          coordinates={{
            x_min: points.result?.[0]?.box?.x_min ?? 0,
            y_min: points.result?.[0].box.y_min,
            x_max: points.result?.[0].box.x_max,
            y_max: points.result?.[0].box.y_max,
            probability: points.result[0].box.probability,
          }}
        />
      </Suspense>

      <Center marginTop={"100px"} marginBottom={"2xl"}>
        <Box>
          <Image
            // 画像のURLを生成
            src={image ?? ""}
            alt="アップロード画像"
            height={640}
            width={480}
            style={{
              border: "2px solid #333333",
            }}
          />
        </Box>
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
};

export default Masked;
