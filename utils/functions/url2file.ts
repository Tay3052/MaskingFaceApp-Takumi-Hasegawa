export const url2file = async (url: string, filename: string) => {
  if (!url) {
    throw new Error("url is empty");
  }
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("fetch failed");
  }

  const blob = await res.blob();

  const file = new File([blob], filename, {
    type: blob.type,
  });

  return file;
};
