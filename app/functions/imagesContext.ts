import { useContext } from "react";
import { ImageContext } from "../utils/context";

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};

export const useSetImage = () => {
  const { setImage } = useImageContext();
  const setNewImage = (image: string | null) => {
    setImage(image);
    console.log("画像を保存しました");
  };
  return setNewImage;
};

export const useRemoveImage = () => {
  const { setImage } = useImageContext();
  const removeImage = () => {
    setImage(null);
    console.log("画像を削除しました");
  };
  return removeImage;
};
