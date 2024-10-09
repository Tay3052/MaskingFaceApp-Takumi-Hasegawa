import { url2file } from "./url2file";
import { useSetImage } from "../useContext/context/imageContext";

export const Detect = async () => {
  const { image } = useSetImage();
  const apiKey: string = process.env.NEXT_PUBLIC_API_KEY || "";
  const url: string = process.env.NEXT_PUBLIC_WEBFRONTIA_URL || "";
  const img: File = await url2file(image || "", "face.jpg");

  try {
    const formData = new FormData();
    formData.append("file", img);
    const detect = await fetch(url, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
      },
      body: formData,
    });
    const result = await detect.json();
    return result;
  } catch (e) {
    console.error("Fetched error", e);
  }
};
