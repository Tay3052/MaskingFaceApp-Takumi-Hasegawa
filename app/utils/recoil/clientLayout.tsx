"use client";

import React,{ReactNode} from "react";
import { RecoilRoot } from "recoil";

// interfaceだとエラーが起きる
type ClientLayoutProps = {  
    children: ReactNode; // childrenの型を指定  
  };  

export default function ClientLayout({ children }: ClientLayoutProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
