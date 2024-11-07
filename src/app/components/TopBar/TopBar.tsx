import React from "react";
import LogoComponent from "../Logo/Logo";
import { Paragraph } from "../Typograpy/Paragraph";
import ButtonComponent from "../Buttons/Button/Button";

interface TopBarComponentProps{
  titlesection1: string;
  titlesection2: string;
  titlesection3: string;
  titlesection4: string;
}

const TopBarComponent: React.FC<TopBarComponentProps> = ({
  titlesection1,
  titlesection2,
  titlesection3,
  titlesection4,
  ...props
}) => {

  return (
    <div id="TopBar" className="w-full h-[78px] px-[120px] py-[17px] border-b-[1px] border-b-[##ADADAD] bg-base-black bg-opacity-90 backdrop-blur-[30px] justify-between items-center inline-flex">
        <LogoComponent />

      <div className="flex flex-row gap-6">
        <Paragraph type="p3" className="font-extralight">{titlesection1}</Paragraph>
        <Paragraph type="p3" className="font-extralight">{titlesection2}</Paragraph>
        <Paragraph type="p3" className="font-extralight">{titlesection3}</Paragraph>
        <Paragraph type="p3" className="font-extralight">{titlesection4}</Paragraph>
      </div>

      <ButtonComponent variant="primary">Entre em contato</ButtonComponent>
      </div>
  );
};

export default TopBarComponent;

