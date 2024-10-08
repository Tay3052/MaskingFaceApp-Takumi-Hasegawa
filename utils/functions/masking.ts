import { useSetImage } from "@/utils/useContext/context/imageContext";
import { url2file } from "./url2file";

export const Masking = async () => {
  const apiKey: string = process.env.faceDitectApiKey || "";
  const url: string = process.env.webfrintiaURL || "";

  const { image } = useSetImage();

  const img = await url2file(image || "", "masking.jpg");

  const mask = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: img,
  });

  const result = await mask.json();
  console.log("masking:", result);

  return result;
};
