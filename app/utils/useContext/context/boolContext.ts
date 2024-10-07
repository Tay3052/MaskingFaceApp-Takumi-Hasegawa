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
    console.log("変換しました");
  };

  return { setBoolean, uploaded };
};
