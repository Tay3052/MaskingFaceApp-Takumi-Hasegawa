"use client";
import React, { createContext, useState, ReactNode } from "react";

interface BoolContextType {
  uploaded: boolean | null;
  setUploaded: (uploaded: boolean | null) => void;
}

export const BoolContext = createContext<BoolContextType | undefined>(
  {} as BoolContextType
);

export const BoolProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [uploaded, setUploaded] = useState<boolean | null>(false);

  return (
    <BoolContext.Provider value={{ uploaded, setUploaded }}>
      {children}
    </BoolContext.Provider>
  );
};
