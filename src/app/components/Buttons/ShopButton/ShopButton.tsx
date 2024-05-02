import React, { ReactNode } from "react";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";
import { Paragraph } from "../../Typograpy/Paragraph";


interface ShopButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ShopButtonComponent({
    children,
  ...props
}: ShopButtonComponentProps) {

  return (
    <button
      {...props}
      className="w-[143px] h-[52px] p-3.5 bg-emerald-400 hover:bg-emerald-500 disabled:bg-emerald-100 disabled:text-slate-100 rounded-tr-sm rounded-br-sm justify-center items-center gap-[9px] inline-flex"
    >
    <Paragraph type="p3" className="font-semibold text-white">{children}</Paragraph>
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 9C3.5 8.58579 3.83579 8.25 4.25 8.25H14.75C15.1642 8.25 15.5 8.58579 15.5 9C15.5 9.41421 15.1642 9.75 14.75 9.75H4.25C3.83579 9.75 3.5 9.41421 3.5 9Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96967 3.21967C9.26256 2.92678 9.73744 2.92678 10.0303 3.21967L15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L10.0303 14.7803C9.73744 15.0732 9.26256 15.0732 8.96967 14.7803C8.67678 14.4874 8.67678 14.0126 8.96967 13.7197L13.6893 9L8.96967 4.28033C8.67678 3.98744 8.67678 3.51256 8.96967 3.21967Z" fill="white"/>
    </svg>
      
    </button>
  );
}
