import React, { ReactNode } from "react";
import { Paragraph } from "../../Typograpy/Paragraph";


interface CategoryCardComponentProps{
  children: ReactNode;
  qtditems: string;
  imagesrc: string;
}

const CategoryCardComponent: React.FC<CategoryCardComponentProps> = ({
  children,
  imagesrc,
  qtditems,
  ...props
}) => {
  return (
    <div className="w-[149px] h-[193px] px-6 py-[18px] bg-[#FEEFEA] rounded-[3px] flex-col justify-start items-center gap-2.5 inline-flex">
        <img src={imagesrc} className="w-[101px] h-[101px]" alt="Minha imagem" />
        <div className="w-[57px] h-[46px] flex-col justify-start items-center gap-[5px] inline-flex">
          <Paragraph type="p2" className="text-lg font-semibold text-slate-70">{children}</Paragraph>
          <Paragraph type="p3" className="text-zinc-400 text-sm font-medium">{qtditems}</Paragraph>
        </div>
        
    </div>
  );
};

export default CategoryCardComponent;

