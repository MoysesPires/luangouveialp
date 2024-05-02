import React from "react";
import { Paragraph } from "../../Typograpy/Paragraph";
import SearchBarComponent from "../../SearchBar/SearchBar";
import AvatarComponent from "../../Avatar/Avatar";
import LogoComponent from "../../Logo/Logo";

interface TopBarComponentProps{
  placeholder: string;
  name: string;
}

const TopBar1Component: React.FC<TopBarComponentProps> = ({
  placeholder,
  name,
  ...props
}) => {
  return (
    <div id="TopBar" className="w-full h-[78px] px-[120px] py-[17px] border-b-[1px] border-b-[##ADADAD] bg-base-white bg-opacity-90 backdrop-blur-[30px] justify-between items-center inline-flex">
        <LogoComponent />

        <SearchBarComponent placeholder={placeholder} />

        <AvatarComponent name={name} />
      </div>
  );
};

export default TopBar1Component;

