"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  border: 1px solid #ccc;
  margin-top: 10px;
`;

export const ImageUploader = () => {
  const [mainImage, setMainImage] = useState(null);
  const [overlayImage, setOverlayImage] = useState(null);
  const canvasRef = useRef(null);
  const mainImgRef = useRef(null);
  const overlayImgRef = useRef(null);

  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMainImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOverlayImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOverlayImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageComposition = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mainImg = mainImgRef.current;
    const overlayImg = overlayImgRef.current;

    if (mainImg && overlayImg) {
      // Canvasのサイズをメイン画像に合わせる
      canvas.width = mainImg.width;
      canvas.height = mainImg.height;

      // メイン画像を描画
      ctx.drawImage(mainImg, 0, 0);

      // マスキングする座標
      const coordinates = {
        probability: 0.9983944296836853,
        x_max: 236,
        y_max: 318,
        x_min: 69,
        y_min: 90,
      };

      // 中心座標を計算
      const centerX = (coordinates.x_min + coordinates.x_max) / 2;
      const centerY = (coordinates.y_min + coordinates.y_max) / 2;

      // オーバーレイ画像のサイズ
      const overlayWidth = coordinates.x_max - coordinates.x_min;
      const overlayHeight = coordinates.y_max - coordinates.y_min;

      // オーバーレイ画像を中心に描画
      ctx.drawImage(
        overlayImg,
        centerX - overlayWidth / 2,
        centerY - overlayHeight / 2,
        overlayWidth,
        overlayHeight
      );
    }
  };

  return (
    <div>
      <h2>画像をアップロードして合成</h2>
      <input type="file" accept="image/*" onChange={handleMainImageUpload} />
      <input type="file" accept="image/*" onChange={handleOverlayImageUpload} />
      <button onClick={handleImageComposition}>合成</button>

      <div>
        {mainImage && (
          <img
            ref={mainImgRef}
            src={mainImage}
            alt="Main"
            style={{ display: "none" }}
          />
        )}
        {overlayImage && (
          <img
            ref={overlayImgRef}
            src={overlayImage}
            alt="Overlay"
            style={{ display: "none" }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
