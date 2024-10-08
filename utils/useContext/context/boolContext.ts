import { useContext } from "react";
import { BoolContext } from "../boolProvider";

export const useBoolContext = () => {
  const context = useContext(BoolContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};

export const useSetBoolean = () => {
  const { uploaded, setUploaded } = useBoolContext();
  const setBoolean = (bool: boolean | null) => {
    setUploaded(bool);
    if (!uploaded) {
      console.log("画像がアップロードされました。");
    } else if (uploaded) {
      console.log("画像が削除されました。");
    } else {
      console.log("エラーが発生しました。");
    }
  };

  return { setBoolean, uploaded };
};
