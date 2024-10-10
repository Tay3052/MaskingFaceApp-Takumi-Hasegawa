"use client";
import { Box, Image, Center, Flex, Button } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
import { useSetImage } from "@/utils/useContext/context/imageContext";
import { useRemoveImage } from "@/utils/useContext/context/imageContext";
import { useSetBoolean } from "@/utils/useContext/context/boolContext";
import { Detect } from "@/utils/functions/detect";
import { useState, useEffect } from "react";
import { Masking } from "@/utils/functions/masking";
import ellipse from "@/static/img/Ellipse.png";

interface Mask {
  box?: {
    x_min: number;
    y_min: number;
    x_max: number;
    y_max: number;
    probability: number;
  };
}

interface PointsProps {
  result: Mask[];
}

const Masked = () => {
  const router = useRouter();
  const rmImage = useRemoveImage().removeImage;
  const { setBoolean: setUploaded } = useSetBoolean();
  const removeImages = () => {
    rmImage(null);
    setUploaded(false);
    router.push("/");
  };
  const [points, setPoints] = useState<PointsProps>();
  //////////////////////////////////////////////
  const det = Detect();
  useEffect(() => {
    if (!points) {
      det.then((result) => {
        setPoints(result);
      });
    }
  }, [det, points]);

  if (points && points.result) {
    const result = points.result; // resultを取得
    console.log(result);
  }
  //////////////////////////////////////////////
  const { image } = useSetImage();
  const overLayImage = ellipse;
  const coordinates = points?.result[0].box;
  if (!coordinates) {
    return <div>loading...</div>;
  }
  const canvas = () => {
    let canvas = document.getElementById("overLay") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");

    let img = image;
  };

  return (
    <>
      <Center marginTop={"100px"} marginBottom={"2xl"}>
        <Box>
          <Masking coordinates={coordinates}></Masking>
          {/* <Image
            // 画像のURLを生成
            src={image ?? ""}
            alt="アップロード画像"
            height={640}
            width={480}
            style={{
              border: "2px solid #333333",
            }}
          /> */}
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
