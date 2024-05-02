import React, { ReactNode } from "react";
import { Paragraph } from "../../Typograpy/Paragraph";
import AddCardButtonComponent from "../../Buttons/AddCardButton/AddCardButton";


interface ProductCardComponentProps{
  children: ReactNode;
  category: string;
  currentvalue: string;
  oldvalue: string;
  imagesrc?: string;
}

const ProductCardComponent: React.FC<ProductCardComponentProps> = ({
  children,
  currentvalue,
  oldvalue,
  imagesrc,
  category,
  ...props
}) => {
  return (
    <div className="w-[228px] h-[302.33px] p-0.5 bg-white rounded-[3px] border border-zinc-400 border-opacity-25 flex-col justify-center items-start inline-flex">
        <img src={imagesrc} className="w-56 h-36" alt="Minha imagem" />
        <div className="w-56 h-[154.33px] p-2.5 bg-white flex-col justify-center items-start gap-[15px] inline-flex">
          <div className="w-[204px] h-[37px] py-2 flex-col justify-center items-start gap-[7px] inline-flex">
            <Paragraph type="p3" className="text-zinc-400 text-xs">{category}</Paragraph>
            <Paragraph type="p3" className="text-slate-700 text-base font-semibold">{children}</Paragraph>
          </div>
          <div className="w-[204px] h-[33.67px] flex-col justify-start items-start gap-[3px] inline-flex">
            <div className="w-[107px] justify-start items-center gap-1 inline-flex">
              <div className="justify-start items-center gap-0.5 flex">
                <div className="w-4 h-4 px-[1.33px] py-[1.67px] justify-center items-center flex" />
                <div className="w-4 h-4 px-[1.33px] py-[1.67px] justify-center items-center flex" />
                <div className="w-4 h-4 px-[1.33px] py-[1.67px] justify-center items-center flex" />
                <div className="w-4 h-4 px-[1.33px] py-[1.67px] justify-center items-center flex" />
                <div className="w-4 h-4 px-[1.33px] py-[1.67px] justify-center items-center flex" />
              </div>
            <Paragraph type="p3" className="text-zinc-400 text-[11px] font-medium">(4)</Paragraph>
            </div>
          </div>
          <div className="w-[202px] h-[33.67px] justify-between items-center inline-flex">
            <div className="w-[89.50px] h-[33.67px] justify-start items-center gap-2.5 inline-flex">
              <Paragraph type="p2" className="text-emerald-400 text-lg font-semibold">{currentvalue}</Paragraph>
              <Paragraph type="p4" className="text-zinc-400 text-sm font-medium line-through">{oldvalue}</Paragraph>
            </div>
            <AddCardButtonComponent>Add</AddCardButtonComponent>
          </div>

        </div>
        
    </div>
  );
};

export default ProductCardComponent;

