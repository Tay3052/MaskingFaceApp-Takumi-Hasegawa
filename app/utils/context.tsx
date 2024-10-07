"use client";
import React, { createContext, useState, ReactNode } from "react";

interface ImageContextType {
  image: string | null;
  setImage: (image: string | null) => void;
}

export const ImageContext = createContext<ImageContextType | undefined>(
  undefined
);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
