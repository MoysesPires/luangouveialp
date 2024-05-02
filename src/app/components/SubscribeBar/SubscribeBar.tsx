import React from "react";
import { Paragraph } from "../Typograpy/Paragraph";

interface SubscribeComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const SubscribeComponent: React.FC<SubscribeComponentProps> = ({
  placeholder,
  ...props
}) => {
  return (
    <div className="w-[437px] h-[52px] justify-center items-center inline-flex">
      <input
        className="w-full h-full p-3 bg-base-white rounded-sm justify-start items-center gap-3 inline-flex outline-0 placeholder:text-base-gray text-base-black"
        placeholder={placeholder}
        {...props}
      />
      <button className="w-[108px] h-[52px] p-3.5 bg-primary-200 hover:bg-emerald-600 disabled:bg-emerald-100 disabled:text-slate-100 rounded-tr-sm rounded-br-sm justify-center items-center gap-[9px] inline-flex">
        <Paragraph className="text-base-white" type="p3">Subscribe</Paragraph>
      </button>
    </div>
  );
};

export default SubscribeComponent;

