import React from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Paragraph } from "../Typograpy/Paragraph";

interface AvatarComponentProps
  extends React.LabelHTMLAttributes<HTMLInputElement> {
  name: string;
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({
  name,
  ...props
}) => {
  return (
    <div className="w-[180px] h-10 justify-center items-center gap-[5px] inline-flex">
        <Avatar>
            <AvatarImage className="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>Deu errado ae</AvatarFallback>
        </Avatar>
        <Paragraph className="font-semibold" type="p3">{name}</Paragraph>
    </div>
  );
};

export default AvatarComponent;

