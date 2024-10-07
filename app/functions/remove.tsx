"use client";

import { useRecoilState } from "recoil";
import { imageState } from "../utils/recoil/atom";

export const removeImage = async () => {
  const [image, setImage] = useRecoilState(imageState);

  // 画像を削除する処理
  console.log("画像を削除しました");
};
