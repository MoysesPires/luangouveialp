import Image from "next/image";
import backgroundImage from "../../public/Rectanglebg.png";

import { Heading } from "./components/Typograpy/Heading";
import { Paragraph } from "./components/Typograpy/Paragraph";
import LogoComponent from "./components/Logo/Logo";
import TopBarComponent from "./components/TopBar/TopBar";
import ButtonComponent from "./components/Buttons/Button/Button";
import { CircleDollarSign, Notebook, Presentation } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-black flex flex-col justify-center relative">
      <TopBarComponent
        titlesection1="Quem sou?"
        titlesection2="Resultados"
        titlesection3="Necessidade"
        titlesection4="O que eu ofereço"
      />

      <div className="w-full bg-base-black flex-col justify-center items-center gap-2.5 flex relative">
        <div className="relative w-full ">
          <img src="./img-bg.svg" className="w-full h-full object-contain" alt="Minha imagem"/>
          <div className="absolute top-0 left-0 pl-[120px] w-full h-full flex flex-col justify-center items-start gap-6">
            <Paragraph type="p3" className="font-bold font-['Space Grotesk'] uppercase leading-tight tracking-wider">
              VAGAS LIMITADAS
            </Paragraph>
            <Heading type="h1" className="font-semibold leading-[76px]">
              Mentoria Moriá<br />para empresários.
            </Heading>
            <Paragraph type="p3" className="text-zinc-300 text-xl font-normal leading-[30px] tracking-tight">
             Potencialize seu negócio com a nossa consultoria experiente.<br />Transformamos desafios em oportunidade de sucesso
            </Paragraph>
            <ButtonComponent variant="primary">TENHO INTERESSE</ButtonComponent>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-[120px] gap-12">

        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <img src="./luan1.svg" className="w-[54px] h-[54px] object-contain" alt="Foto do Luan"/>
            <div className="flex flex-col gap-0">
              <Paragraph type="p2" className="font-semibold text-center">Luan Gouveia</Paragraph>
              <Paragraph type="p4" className="font-extralight text-center">Mentor de negócios</Paragraph>
            </div>
          </div>
          <div className="w-[54px] h-[0px] origin-top-left rotate-90 border-2 border-zinc-800" />
          <div className="flex flex-row gap-3 justify-center items-center">
            <Presentation size={32} color="#A1A1AA" />
            <div className="flex flex-col gap-0">
              <Paragraph type="p3" className="font-normal leading-[20px]">Mentoria ao<br/> vivo no zoom</Paragraph>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-center items-center">
            <CircleDollarSign size={32} color="#A1A1AA" />
            <div className="flex flex-col gap-0">
              <Paragraph type="p3" className="font-normal leading-[20px]">Multiplique seus<br/>resultados de vendas</Paragraph>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-center items-center">
            <Notebook size={32} color="#A1A1AA" />
            <div className="flex flex-col gap-0">
              <Paragraph type="p3" className="font-normal leading-[20px]">Com certificado<br/>de participação</Paragraph>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
