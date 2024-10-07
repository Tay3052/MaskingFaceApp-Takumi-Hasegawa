import { atom } from "recoil";

export const imageState = atom<File | null>({
  key: "imageState",
  default: null,
});
