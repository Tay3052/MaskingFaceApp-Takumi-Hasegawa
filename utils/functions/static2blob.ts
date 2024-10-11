export const fetchImageAsBlob = async (imagePath: string): Promise<Blob> => {
  const response = await fetch(imagePath);
  if (!response.ok) {
    throw new Error("画像の取得に失敗しました");
  }
  return await response.blob();
};
