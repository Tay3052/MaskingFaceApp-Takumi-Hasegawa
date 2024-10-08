export const url2file = async (url: string, filename: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("fetch failed");
  }

  const blob = await res.blob();

  const file = new File([blob], filename, {
    type: blob.type,
  });

  console.log("url2f:", file);
  return file;
};
