import { useContext } from "react";
import { ImageContext } from "../imageProvider";

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};

export const useSetImage = () => {
  const { image, setImage } = useImageContext();
  const setNewImage = (image: string | null) => {
    setImage(image);
    console.log("画像を保存しました");
  };

  return { setNewImage, image };
};

export const useRemoveImage = () => {
  const { image, setImage } = useImageContext();
  const removeImage = (image: string | null) => {
    setImage(image);
    console.log("画像を削除しました");
  };
  return { removeImage, image };
};
