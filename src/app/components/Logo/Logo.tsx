import React, { ReactNode } from "react";
import { Paragraph } from "../Typograpy/Paragraph";

export default function LogoComponent() {
  return (
    <div id="logo" className="flex items-center justify-center gap-2">
      <div className="flex-col justify-center items-start inline-flex">
        <Paragraph type="p1" className="text-base-white font-bold">Luan Gouveia</Paragraph>
      </div>
    </div>
  );
}
