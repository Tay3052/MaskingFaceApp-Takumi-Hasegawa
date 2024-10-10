"use client";
import React, { useEffect } from "react";
import styled from "styled-components"; // 修正: named import を default import に変更
import { Box } from "@yamada-ui/react";
import { useSetImage } from "../useContext/context/imageContext";
import ellipse from "@/static/img/Ellipse.png";
import Image from "next/image";

interface Mask {
  probability: number;
  x_max: number;
  y_max: number;
  x_min: number;
  y_min: number;
}

interface MaskingProps {
  coordinates: Mask;
}

export const Masking: React.FC<MaskingProps> = (coordinates) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const mainImgRef = React.useRef<HTMLImageElement | null>(null);
  const overLayImgRef = React.useRef<HTMLImageElement | null>(null);
  const mainImgSrc = useSetImage().image || "";
  const overLayImgSrc =
    ellipse instanceof Blob ? URL.createObjectURL(ellipse) : "";

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const mainImg = mainImgRef.current as HTMLImageElement;
    const overLayImg = overLayImgRef.current as HTMLImageElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = mainImg.width || 0;
    canvas.height = mainImg.height || 0;
    ctx.drawImage(mainImg, 0, 0);

    const { x_min, y_min, x_max, y_max } = coordinates.coordinates;
    const overlayWidth = x_max - x_min;
    const overlayHeight = y_max - y_min;

    ctx.drawImage(overLayImg, x_max, y_max, overlayWidth, overlayHeight);
  }, [coordinates]);

  return (
    <MaskingBox>
      <Image
        ref={mainImgRef}
        src={mainImgSrc}
        width={480}
        height={640}
        alt=""
      />
      <Image
        ref={overLayImgRef}
        src={overLayImgSrc}
        alt=""
        objectFit="overlay"
      />
      <MaskingCanvas ref={canvasRef} />
    </MaskingBox>
  );
};

const MaskingBox = styled(Box)`
  position: relative;
  display: inline-block;
`;

const MaskingCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;
