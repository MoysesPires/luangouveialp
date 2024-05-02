import Image from "next/image";
import backgroundImage from "../../public/Rectanglebg.png";

import { Heading } from "./components/Typograpy/Heading";
import { Paragraph } from "./components/Typograpy/Paragraph";
import TopBar1Component from "./components/TopBars/TopBar1/TopBar1";
import TopBar2Component from "./components/TopBars/TopBar2/TopBar2";
import SubscribeComponent from "./components/SubscribeBar/SubscribeBar";
import CategoryCardComponent from "./components/Cards/CategoryCard/CategoryCard";
import ProductCardComponent from "./components/Cards/ProductCard/ProductCard";
import OfferComponent from "./components/Offer/Offer";
import ShopButtonComponent from "./components/Buttons/ShopButton/ShopButton";
import BenefitsComponent from "./components/Benefits/Benefits";
import LogoComponent from "./components/Logo/Logo";


export default function Home() {
  return (
    <main className="min-h-screen bg-base-white justify-center">

      <TopBar1Component placeholder="Search for items..." name="Matheus Martins" />
      <TopBar2Component />

      <div className="w-full h-[477px] itens-center justify-between flex-nowrap flex bg-main">
        <div className="w-[532px] h-full flex-col pl-[110px] itens-center justify-center gap-[29px] inline-flex ">
          <Heading className="font-bold text-slate-700 w-[536px] leading-[60px]" type="h1">Don’t miss our daily amazing deals.</Heading>
          <Paragraph className="font-medium text-zinc-500" type="p1">Save up to 60% off on your first order</Paragraph>
          <SubscribeComponent placeholder="Enter your email address" />
        </div>
        <img src="./Hero-img.png" className="w-[642px] h-[477px]" alt="Minha imagem" />
      </div>

      
        <div className="w-full flex px-[64px] pt-[100px] itens-center justify-start gap-[37px] flex-col">
          <Heading className="font-semibold" type="h2">Explore Categories:</Heading>
          <div className="flex-row itens-center justify-start flex gap-[26px]">
            <CategoryCardComponent qtditems="20 items" imagesrc="https://s3-alpha-sig.figma.com/img/2560/4118/8ea14387d175433535d2ca9b8bef8726?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hWg77nnntf-SUiN6lA07PwmlAO76qja5DZ8E7nf34uHAubwXy2ThuIKglBfPi9v~hR3LRFbYP7wS~QsTfCSjRprpqN3YkTS27K~GDhFE-W~7oGbYw5szGSi9owKW2c9GNk8soGsxrK8K2hPOhXDc55pQZqkjwB4biUxt2vZWOs1QUwRujRh9t~in3i9mJctnk4dUY5iwAUlLff9N6vEoqIQ41XiPjQqwmSYmuOIqgyHeA388o43E2HaWJJ251qEp5bS2lPCfwe2N5cGJfWAzXiFwf79kCp1J4UbDsoAU9DXJ5MFpfdrKu6dMA-qn-Y3GifPoypnNh9CAyKGWUN1QDQ__"
            >Peach</CategoryCardComponent>
            <CategoryCardComponent qtditems="20 items" imagesrc="https://s3-alpha-sig.figma.com/img/2560/4118/8ea14387d175433535d2ca9b8bef8726?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hWg77nnntf-SUiN6lA07PwmlAO76qja5DZ8E7nf34uHAubwXy2ThuIKglBfPi9v~hR3LRFbYP7wS~QsTfCSjRprpqN3YkTS27K~GDhFE-W~7oGbYw5szGSi9owKW2c9GNk8soGsxrK8K2hPOhXDc55pQZqkjwB4biUxt2vZWOs1QUwRujRh9t~in3i9mJctnk4dUY5iwAUlLff9N6vEoqIQ41XiPjQqwmSYmuOIqgyHeA388o43E2HaWJJ251qEp5bS2lPCfwe2N5cGJfWAzXiFwf79kCp1J4UbDsoAU9DXJ5MFpfdrKu6dMA-qn-Y3GifPoypnNh9CAyKGWUN1QDQ__"
            >Peach</CategoryCardComponent>
            <CategoryCardComponent qtditems="20 items" imagesrc="https://s3-alpha-sig.figma.com/img/2560/4118/8ea14387d175433535d2ca9b8bef8726?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hWg77nnntf-SUiN6lA07PwmlAO76qja5DZ8E7nf34uHAubwXy2ThuIKglBfPi9v~hR3LRFbYP7wS~QsTfCSjRprpqN3YkTS27K~GDhFE-W~7oGbYw5szGSi9owKW2c9GNk8soGsxrK8K2hPOhXDc55pQZqkjwB4biUxt2vZWOs1QUwRujRh9t~in3i9mJctnk4dUY5iwAUlLff9N6vEoqIQ41XiPjQqwmSYmuOIqgyHeA388o43E2HaWJJ251qEp5bS2lPCfwe2N5cGJfWAzXiFwf79kCp1J4UbDsoAU9DXJ5MFpfdrKu6dMA-qn-Y3GifPoypnNh9CAyKGWUN1QDQ__"
            >Peach</CategoryCardComponent>
            <CategoryCardComponent qtditems="20 items" imagesrc="https://s3-alpha-sig.figma.com/img/2560/4118/8ea14387d175433535d2ca9b8bef8726?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hWg77nnntf-SUiN6lA07PwmlAO76qja5DZ8E7nf34uHAubwXy2ThuIKglBfPi9v~hR3LRFbYP7wS~QsTfCSjRprpqN3YkTS27K~GDhFE-W~7oGbYw5szGSi9owKW2c9GNk8soGsxrK8K2hPOhXDc55pQZqkjwB4biUxt2vZWOs1QUwRujRh9t~in3i9mJctnk4dUY5iwAUlLff9N6vEoqIQ41XiPjQqwmSYmuOIqgyHeA388o43E2HaWJJ251qEp5bS2lPCfwe2N5cGJfWAzXiFwf79kCp1J4UbDsoAU9DXJ5MFpfdrKu6dMA-qn-Y3GifPoypnNh9CAyKGWUN1QDQ__"
            >Peach</CategoryCardComponent>
            <CategoryCardComponent qtditems="20 items" imagesrc="https://s3-alpha-sig.figma.com/img/2560/4118/8ea14387d175433535d2ca9b8bef8726?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hWg77nnntf-SUiN6lA07PwmlAO76qja5DZ8E7nf34uHAubwXy2ThuIKglBfPi9v~hR3LRFbYP7wS~QsTfCSjRprpqN3YkTS27K~GDhFE-W~7oGbYw5szGSi9owKW2c9GNk8soGsxrK8K2hPOhXDc55pQZqkjwB4biUxt2vZWOs1QUwRujRh9t~in3i9mJctnk4dUY5iwAUlLff9N6vEoqIQ41XiPjQqwmSYmuOIqgyHeA388o43E2HaWJJ251qEp5bS2lPCfwe2N5cGJfWAzXiFwf79kCp1J4UbDsoAU9DXJ5MFpfdrKu6dMA-qn-Y3GifPoypnNh9CAyKGWUN1QDQ__"
            >Peach</CategoryCardComponent>
            <CategoryCardComponent qtditems="20 items" imagesrc="https://s3-alpha-sig.figma.com/img/2560/4118/8ea14387d175433535d2ca9b8bef8726?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hWg77nnntf-SUiN6lA07PwmlAO76qja5DZ8E7nf34uHAubwXy2ThuIKglBfPi9v~hR3LRFbYP7wS~QsTfCSjRprpqN3YkTS27K~GDhFE-W~7oGbYw5szGSi9owKW2c9GNk8soGsxrK8K2hPOhXDc55pQZqkjwB4biUxt2vZWOs1QUwRujRh9t~in3i9mJctnk4dUY5iwAUlLff9N6vEoqIQ41XiPjQqwmSYmuOIqgyHeA388o43E2HaWJJ251qEp5bS2lPCfwe2N5cGJfWAzXiFwf79kCp1J4UbDsoAU9DXJ5MFpfdrKu6dMA-qn-Y3GifPoypnNh9CAyKGWUN1QDQ__"
            >Peach</CategoryCardComponent>
            <CategoryCardComponent qtditems="20 items" imagesrc="https://s3-alpha-sig.figma.com/img/2560/4118/8ea14387d175433535d2ca9b8bef8726?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hWg77nnntf-SUiN6lA07PwmlAO76qja5DZ8E7nf34uHAubwXy2ThuIKglBfPi9v~hR3LRFbYP7wS~QsTfCSjRprpqN3YkTS27K~GDhFE-W~7oGbYw5szGSi9owKW2c9GNk8soGsxrK8K2hPOhXDc55pQZqkjwB4biUxt2vZWOs1QUwRujRh9t~in3i9mJctnk4dUY5iwAUlLff9N6vEoqIQ41XiPjQqwmSYmuOIqgyHeA388o43E2HaWJJ251qEp5bS2lPCfwe2N5cGJfWAzXiFwf79kCp1J4UbDsoAU9DXJ5MFpfdrKu6dMA-qn-Y3GifPoypnNh9CAyKGWUN1QDQ__"
            >Peach</CategoryCardComponent>
          </div>
        </div>

        <div className="w-full pt-[100px] itens-center justify-start gap-[37px] flex px-[64px] flex-col">
          <Heading className="font-semibold" type="h2">Explore Categories:</Heading>

          <div className="flex flex-row gap-[12px] justify-start items-center">
            <ProductCardComponent currentvalue="$2" oldvalue="$3.99" imagesrc="https://lh3.googleusercontent.com/pw/AP1GczO_KPPAxT2kOnZrDFo_G3mFm2ytKErcu1zD9_6mJhunU7DN_Ps7LRMXrjrU75LVD1CTjzl0GTc-5ymDvirDOV85w0rtsfVMkopqHCutj2iiIg9WO4f8K5IkGYEuS-Ie4x_ICr2_xP-0UQq_b-YZ9pn-UNmzS6k4A0l-IUJtBk6a2r46uoHF6HLaDZ0mDNXSAkz_L4J77g8BwSfgJQy3hhFBxYJegzeP6n6V2qyjJbkfzNKOl8kCVPm_WTRWCne2X1CS3oH1OIR_WEvsX0C8EqiNzv0vywNujEhj7gWhvWwn0qiTohce4EPTJDvAR-LWOi-oOF4kgI9npyInVAieQ1FDL7NdUP-y-OSinjxwcI5xSbUjfs4OMK_Cz6ToTCwpTNw1sMzLUq-7W6ND3wd7341ineVECcPeyIAmTM2KVAd18iTvcsUuKYZHhZPLIzJDeEzkE8I1hcwkP2JvpOfOudPwFwJvAnuMD4RkmlbirrrwcPhkSKssdwqDvP4hw9_OZ05Mv2kq0Y0RjzQTNlKSPwG-Shz5BitD113It7oFfVgfkdzLlOI77qGBJ8M09F8r0U-MbsiqrOUnOxkBRibFRHslGM76mzbALufwWtkXk2QJvrgiIAsqJUbqcOqCilBP2K-CBMdlW0_Lbk63hJinsEWGRmf7nzRPgiOc-k6ECX2wLRIBRvBu0CF_3po7RLPIQUkcVflBkanBQAdMorSyEXSmrrBcYhJbBQaGM2g9en4ZB17MjAPJKHRcVIexsz5CoMbxR3DbhNuGPBKD5cnwUakaVntTkNslB020Kbv9LWRzYLXYTKYs5N4PZcwdA02UDOkFrIv4O3xN7qIZ67_AsYPyGCq_WUw8dMkZj4TFjvNcwXb1FY5JGccvrRllcUorbTiX_ilTRvXi_bNK7z_m0Q7Imw=w224-h144-s-no-gm?authuser=0" category="Vegetables">Redish 400g</ProductCardComponent>
            <ProductCardComponent currentvalue="$2" oldvalue="$3.99" imagesrc="https://lh3.googleusercontent.com/pw/AP1GczO_KPPAxT2kOnZrDFo_G3mFm2ytKErcu1zD9_6mJhunU7DN_Ps7LRMXrjrU75LVD1CTjzl0GTc-5ymDvirDOV85w0rtsfVMkopqHCutj2iiIg9WO4f8K5IkGYEuS-Ie4x_ICr2_xP-0UQq_b-YZ9pn-UNmzS6k4A0l-IUJtBk6a2r46uoHF6HLaDZ0mDNXSAkz_L4J77g8BwSfgJQy3hhFBxYJegzeP6n6V2qyjJbkfzNKOl8kCVPm_WTRWCne2X1CS3oH1OIR_WEvsX0C8EqiNzv0vywNujEhj7gWhvWwn0qiTohce4EPTJDvAR-LWOi-oOF4kgI9npyInVAieQ1FDL7NdUP-y-OSinjxwcI5xSbUjfs4OMK_Cz6ToTCwpTNw1sMzLUq-7W6ND3wd7341ineVECcPeyIAmTM2KVAd18iTvcsUuKYZHhZPLIzJDeEzkE8I1hcwkP2JvpOfOudPwFwJvAnuMD4RkmlbirrrwcPhkSKssdwqDvP4hw9_OZ05Mv2kq0Y0RjzQTNlKSPwG-Shz5BitD113It7oFfVgfkdzLlOI77qGBJ8M09F8r0U-MbsiqrOUnOxkBRibFRHslGM76mzbALufwWtkXk2QJvrgiIAsqJUbqcOqCilBP2K-CBMdlW0_Lbk63hJinsEWGRmf7nzRPgiOc-k6ECX2wLRIBRvBu0CF_3po7RLPIQUkcVflBkanBQAdMorSyEXSmrrBcYhJbBQaGM2g9en4ZB17MjAPJKHRcVIexsz5CoMbxR3DbhNuGPBKD5cnwUakaVntTkNslB020Kbv9LWRzYLXYTKYs5N4PZcwdA02UDOkFrIv4O3xN7qIZ67_AsYPyGCq_WUw8dMkZj4TFjvNcwXb1FY5JGccvrRllcUorbTiX_ilTRvXi_bNK7z_m0Q7Imw=w224-h144-s-no-gm?authuser=0" category="Vegetables">Redish 400g</ProductCardComponent>
            <ProductCardComponent currentvalue="$2" oldvalue="$3.99" imagesrc="https://lh3.googleusercontent.com/pw/AP1GczO_KPPAxT2kOnZrDFo_G3mFm2ytKErcu1zD9_6mJhunU7DN_Ps7LRMXrjrU75LVD1CTjzl0GTc-5ymDvirDOV85w0rtsfVMkopqHCutj2iiIg9WO4f8K5IkGYEuS-Ie4x_ICr2_xP-0UQq_b-YZ9pn-UNmzS6k4A0l-IUJtBk6a2r46uoHF6HLaDZ0mDNXSAkz_L4J77g8BwSfgJQy3hhFBxYJegzeP6n6V2qyjJbkfzNKOl8kCVPm_WTRWCne2X1CS3oH1OIR_WEvsX0C8EqiNzv0vywNujEhj7gWhvWwn0qiTohce4EPTJDvAR-LWOi-oOF4kgI9npyInVAieQ1FDL7NdUP-y-OSinjxwcI5xSbUjfs4OMK_Cz6ToTCwpTNw1sMzLUq-7W6ND3wd7341ineVECcPeyIAmTM2KVAd18iTvcsUuKYZHhZPLIzJDeEzkE8I1hcwkP2JvpOfOudPwFwJvAnuMD4RkmlbirrrwcPhkSKssdwqDvP4hw9_OZ05Mv2kq0Y0RjzQTNlKSPwG-Shz5BitD113It7oFfVgfkdzLlOI77qGBJ8M09F8r0U-MbsiqrOUnOxkBRibFRHslGM76mzbALufwWtkXk2QJvrgiIAsqJUbqcOqCilBP2K-CBMdlW0_Lbk63hJinsEWGRmf7nzRPgiOc-k6ECX2wLRIBRvBu0CF_3po7RLPIQUkcVflBkanBQAdMorSyEXSmrrBcYhJbBQaGM2g9en4ZB17MjAPJKHRcVIexsz5CoMbxR3DbhNuGPBKD5cnwUakaVntTkNslB020Kbv9LWRzYLXYTKYs5N4PZcwdA02UDOkFrIv4O3xN7qIZ67_AsYPyGCq_WUw8dMkZj4TFjvNcwXb1FY5JGccvrRllcUorbTiX_ilTRvXi_bNK7z_m0Q7Imw=w224-h144-s-no-gm?authuser=0" category="Vegetables">Redish 400g</ProductCardComponent>
            <ProductCardComponent currentvalue="$2" oldvalue="$3.99" imagesrc="https://lh3.googleusercontent.com/pw/AP1GczO_KPPAxT2kOnZrDFo_G3mFm2ytKErcu1zD9_6mJhunU7DN_Ps7LRMXrjrU75LVD1CTjzl0GTc-5ymDvirDOV85w0rtsfVMkopqHCutj2iiIg9WO4f8K5IkGYEuS-Ie4x_ICr2_xP-0UQq_b-YZ9pn-UNmzS6k4A0l-IUJtBk6a2r46uoHF6HLaDZ0mDNXSAkz_L4J77g8BwSfgJQy3hhFBxYJegzeP6n6V2qyjJbkfzNKOl8kCVPm_WTRWCne2X1CS3oH1OIR_WEvsX0C8EqiNzv0vywNujEhj7gWhvWwn0qiTohce4EPTJDvAR-LWOi-oOF4kgI9npyInVAieQ1FDL7NdUP-y-OSinjxwcI5xSbUjfs4OMK_Cz6ToTCwpTNw1sMzLUq-7W6ND3wd7341ineVECcPeyIAmTM2KVAd18iTvcsUuKYZHhZPLIzJDeEzkE8I1hcwkP2JvpOfOudPwFwJvAnuMD4RkmlbirrrwcPhkSKssdwqDvP4hw9_OZ05Mv2kq0Y0RjzQTNlKSPwG-Shz5BitD113It7oFfVgfkdzLlOI77qGBJ8M09F8r0U-MbsiqrOUnOxkBRibFRHslGM76mzbALufwWtkXk2QJvrgiIAsqJUbqcOqCilBP2K-CBMdlW0_Lbk63hJinsEWGRmf7nzRPgiOc-k6ECX2wLRIBRvBu0CF_3po7RLPIQUkcVflBkanBQAdMorSyEXSmrrBcYhJbBQaGM2g9en4ZB17MjAPJKHRcVIexsz5CoMbxR3DbhNuGPBKD5cnwUakaVntTkNslB020Kbv9LWRzYLXYTKYs5N4PZcwdA02UDOkFrIv4O3xN7qIZ67_AsYPyGCq_WUw8dMkZj4TFjvNcwXb1FY5JGccvrRllcUorbTiX_ilTRvXi_bNK7z_m0Q7Imw=w224-h144-s-no-gm?authuser=0" category="Vegetables">Redish 400g</ProductCardComponent>
            <ProductCardComponent currentvalue="$2" oldvalue="$3.99" imagesrc="https://lh3.googleusercontent.com/pw/AP1GczO_KPPAxT2kOnZrDFo_G3mFm2ytKErcu1zD9_6mJhunU7DN_Ps7LRMXrjrU75LVD1CTjzl0GTc-5ymDvirDOV85w0rtsfVMkopqHCutj2iiIg9WO4f8K5IkGYEuS-Ie4x_ICr2_xP-0UQq_b-YZ9pn-UNmzS6k4A0l-IUJtBk6a2r46uoHF6HLaDZ0mDNXSAkz_L4J77g8BwSfgJQy3hhFBxYJegzeP6n6V2qyjJbkfzNKOl8kCVPm_WTRWCne2X1CS3oH1OIR_WEvsX0C8EqiNzv0vywNujEhj7gWhvWwn0qiTohce4EPTJDvAR-LWOi-oOF4kgI9npyInVAieQ1FDL7NdUP-y-OSinjxwcI5xSbUjfs4OMK_Cz6ToTCwpTNw1sMzLUq-7W6ND3wd7341ineVECcPeyIAmTM2KVAd18iTvcsUuKYZHhZPLIzJDeEzkE8I1hcwkP2JvpOfOudPwFwJvAnuMD4RkmlbirrrwcPhkSKssdwqDvP4hw9_OZ05Mv2kq0Y0RjzQTNlKSPwG-Shz5BitD113It7oFfVgfkdzLlOI77qGBJ8M09F8r0U-MbsiqrOUnOxkBRibFRHslGM76mzbALufwWtkXk2QJvrgiIAsqJUbqcOqCilBP2K-CBMdlW0_Lbk63hJinsEWGRmf7nzRPgiOc-k6ECX2wLRIBRvBu0CF_3po7RLPIQUkcVflBkanBQAdMorSyEXSmrrBcYhJbBQaGM2g9en4ZB17MjAPJKHRcVIexsz5CoMbxR3DbhNuGPBKD5cnwUakaVntTkNslB020Kbv9LWRzYLXYTKYs5N4PZcwdA02UDOkFrIv4O3xN7qIZ67_AsYPyGCq_WUw8dMkZj4TFjvNcwXb1FY5JGccvrRllcUorbTiX_ilTRvXi_bNK7z_m0Q7Imw=w224-h144-s-no-gm?authuser=0" category="Vegetables">Redish 400g</ProductCardComponent>
          </div>
        </div>

        <div className="w-full mt-[109px] justify-center flex flex-row gap-[18px]">
          <div id="Offer1" className="w-[592px] h-[300px] pl-12 py-[33px] bg-[#FFF5E1] bg-opacity-85 rounded-[3px] justify-start items-center gap-2.5 inline-flex">
            <div className="w-[300px] h-[232px] flex-col justify-start items-start gap-[43px] inline-flex">
              <div className="w-[300px] h-[137px] flex-col gap-[15px] items-start flex">
                <OfferComponent variant="secondary">Free delivery</OfferComponent>
                <Heading className="text-slate-700 text-[28px] font-semibold" type="h3">Free delivery over 50$</Heading>
                <Paragraph className=" text-zinc-500 font-medium leading-7" type="p2">Shop $50 product and get free delivery anywhre.</Paragraph>
              </div>

              <ShopButtonComponent>Shop Now</ShopButtonComponent>
            </div>
            <img className="w-[184px] ml-[54px] h-[289px]" src="https://lh3.googleusercontent.com/pw/AP1GczNvAcXHPpN4raG935z3pVrXzr73tp3_vg88gk_JhuynE74r-FAz-Yt6qm89DHnAGGnkfptMtWfK4qIkyB2wKx_T_Cnq8xIXGUHAGHC_IbJaRC26t-4p0cCgAPXB-KVI0KMr5tOMZ3n5Zz-TxF31XRoOil1mGAJ6Z2ZQDkpS8Wj0cwe30qEgP1lOqozxyiK9XW83BdbjCH-NmjXzXvJgkGjcNLGqfz2JLizLqvfh6JMxRShBzsVxxY_HV__h8E0XWuVULhgmI3VprthN6PlN6eSezPlWJNzuyUCGkladXHR6xIo-quVVlOSWGbQbPXatQFpuMlFJY6zst9mAhSPHp2ec6otjKIGdhqN8vs6GIDpqjeQSVULFG5xPG3jZssFtfRl18u9L45jUy596n7dqnig9e5r0dr6GgXj-q3V_LuGNp0B1wxelyIsCeH1N6wfzI4F8n9FTloeUqiH6eB519BRmmcl_FMZpshGDJwFUWB_cKty5E2Iv5Y2YWebGO64839ocb6zuM5eCoJDdISMSoWBdhJIIYLEgX-2-idxfGXDSu0d2QlpjxbP9V7vRiR7I6ny6fWCG7le24rs9ZrtK2x158QLC4t0jnsV2BKj7DJiQXuYp8nQPiXqSvwv1yLwlZZOEIZKSVre2qqmHZYVo5x880e0PIuxA8pVSzqI_SM-oYNhwnjlhMvXKtez6-5JV-4M5AVZATKicjQL5wmlnaYaRpe4N-ZD2EIH0-lUKMI0l8TJhIJ5B9XxS5rPx8pR_XUWJ-_O2zhnk4EXxawl9zULNLoeM3Q-K3uUoPos0jC-jgp_gvXuWGv3K2XL1gHmrahFbElgKw0R_00z0cr2CEfg3ZDDxwU4RlUQ-qPOnXKwCzMIzEganQrRtkTNePQNtbODe5NatDTu35YquPFL-4ciU=w184-h289-s-no-gm?authuser=0" />
          </div>
          <div id="Offer2" className="w-[590px] h-[300px] px-12 py-[34px] bg-emerald-100 rounded-[3px] justify-start items-start gap-2.5 inline-flex">
            <div className="w-[255px] h-[232px] flex-col justify-start items-start gap-[43px] inline-flex">
              <div className="w-[255px] h-[137px] flex-col justify-start items-start gap-[15px] inline-flex">
                <OfferComponent variant="primary">60% off</OfferComponent>
                <Heading className="text-slate-700 text-[28px] font-semibold" type="h3">Organic Food</Heading>
                <Paragraph className=" text-zinc-500 font-medium leading-7" type="p2">Save up to 60% off on your first order</Paragraph>
              </div>

              <ShopButtonComponent>Order Now</ShopButtonComponent>
            </div>
            <img className="w-[275px] h-[258px] mt-2 ml-[2px]" src="https://lh3.googleusercontent.com/pw/AP1GczPPwomcZw56pCxMVoTaCXxvNz_E6O0b8oqmEMAAIJ0oV0vObLUsU-kM1crRazaD0cB1lUTrJYUcoWGku8KhjH4JD1MfmifOsRQgyDeSq_qO70b9rgH0nWK4JSGT07MkTuaBQ3mxivPgr8iyC8BIZhRpxYbF5m0wUzA-MMJzgKpmpYaEzzr5fqaDsEspYNYAKeVxWDYjWbjlWWV_7lmKCBO51gMC562-C5jd-yRnSSJb4mWLt3YBVcjox8RKqvhcB09v542jKbPUqlvSa8fEUsPSXujPAvYyz5msYV2ylHSrJrG39DvSiIzUy5Sw1Ne6eXH692vQuFy1rligkIhAbkcExoM9d5qyOOmE1NUY21KuAEdEVyCEVs0jfpC3OYyMTV71mxY6YahpuJFLbSBwRb-HCa9_N5pV6w7i4OZlo3i7lau6eyiUMhl3NybYuFMtsyl6fkUdXWlajGF9xCkb6HAr0ig8BRiMDz_JmUQnm34LwEtks2aLGPhwjaCuzSR-ON66LVwwRXUdumJFg6Mws2EiB6I88Ov7k3l71t1_EmmX0X27rG2m8nLDDh90KQZ3GZSN5YeBTrtXK8hlHVaH7egbLzHbRfnFYr8AWaZGZ7YKoXjNvzQJfH0-gJ27hi1SI9Xc5wgopdudIekUVueWO9gcEr2cwJMX3_P4BEOOqcfrSEfNHRKb0URq2jdZ2GYfU-SvdTRiFX_RhVwb1E39XCz3d3whRkKwHlgzIQ4VK-BsdvOO6upo_UW0lR4EUbVMqds0CmwQNCVPldp1BXaLDmCCBknpXzUxwX4fDRHJPGCbpol2zzytI7LPjoaCScgvj5pjPhOox-tNSaufptZ-1JKFQfqdtyGg-k0dFDLtJndCtNsQ4QvilMroGitfamePBl_0xltXkixyWeARQ0jLzaoW6g=w275-h258-s-no-gm?authuser=0" />
          </div>
        </div>

        <div className="w-full mt-[38px] h-[796px] bg-green-200 flex flex-row items-center justify-center bg-opacity-80" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
          <div className="flex flex-col gap-[62px] items-start">
            <div className="w-[532px] h-50 flex-col justify-center items-start gap-[29px] inline-flex">
              <Heading className="w-[532px] leading-[64px] text-slate-700 font-bold" type="h1">Shop Faster With Groceyish App</Heading>
              <Paragraph className="text-zinc-500 text-xl font-medium" type="p1">Available on both IOS & Android</Paragraph>
            </div>
            <div className="flex flex-row gap-[16px] justify-center items-center">
              <img src="./AndroidDownload.png" className="w-[219px] h-[63px]" alt="Minha imagem" />
              <img src="./AppleDownload.png" className="w-[219px] h-[63px]" alt="Minha imagem" />
            </div>
          </div>
          <div className="w-[669px] h-[716.71px] relative">
            <img className="w-[314px] h-[680px] left-[355px] top-0 absolute rounded-[37px] border-4 border-emerald-400 border-opacity-40" src="https://via.placeholder.com/314x680" />
            <div className="w-[235.24px] h-[509.38px] left-[180px] top-[191.22px] absolute origin-top-left rotate-[-7.87deg] bg-black bg-opacity-10 rounded-[37px] blur-[140px]" />
            <img className="w-[313.99px] h-[679.88px] left-0 top-[43.24px] absolute origin-top-left rotate-[-7.87deg] rounded-[37px] border-4 border-emerald-400 border-opacity-40" src="https://via.placeholder.com/314x680" />
          </div>
        </div>

        <div className="w-[1200px] h-[475px] mt-[89px] mx-[70px] gap-[104px] flex-col flex items-center justify-center">
          <div className="flex border-b-[1px] border-b-[##ADADAD] flex-row gap-[102px]">
            <BenefitsComponent legend="Don’t miss our daily amazing deals and prices">Best Prices & Deals</BenefitsComponent>
            <BenefitsComponent legend="Don’t miss our daily amazing deals and prices">Best Prices & Deals</BenefitsComponent>
            <BenefitsComponent legend="Don’t miss our daily amazing deals and prices">Best Prices & Deals</BenefitsComponent>
          </div>

          <div className="w-[1200px] h-[259px] pb-[60px] justify-center items-center inline-flex">
            <div className="w-[363px] h-[259px] flex-col flex gap-[36px] items-start">
              <LogoComponent />
              <div className="flex flex-col gap-[29px]">
                <div className="flex flex-row gap-[8px] items-center justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 1.5C7.9087 1.5 6.38258 2.13214 5.25736 3.25736C4.13214 4.38258 3.5 5.9087 3.5 7.5C3.5 9.82354 5.0118 12.0782 6.66946 13.8279C7.48296 14.6866 8.299 15.3896 8.91251 15.8781C9.14084 16.0599 9.34027 16.2114 9.5 16.3294C9.65973 16.2114 9.85916 16.0599 10.0875 15.8781C10.701 15.3896 11.517 14.6866 12.3305 13.8279C13.9882 12.0782 15.5 9.82354 15.5 7.5C15.5 5.9087 14.8679 4.38258 13.7426 3.25736C12.6174 2.13214 11.0913 1.5 9.5 1.5ZM9.5 17.25C9.08397 17.874 9.08379 17.8739 9.08357 17.8738L9.08143 17.8723L9.07643 17.869L9.05924 17.8574C9.04464 17.8474 9.02381 17.8332 8.99717 17.8147C8.9439 17.7778 8.86735 17.7241 8.77084 17.6544C8.57791 17.5151 8.30477 17.3117 7.97812 17.0516C7.326 16.5323 6.45454 15.7821 5.58054 14.8596C3.8632 13.0468 2 10.4265 2 7.5C2 5.51088 2.79018 3.60322 4.1967 2.1967C5.60322 0.790176 7.51088 0 9.5 0C11.4891 0 13.3968 0.790176 14.8033 2.1967C16.2098 3.60322 17 5.51088 17 7.5C17 10.4265 15.1368 13.0468 13.4195 14.8596C12.5455 15.7821 11.674 16.5323 11.0219 17.0516C10.6952 17.3117 10.4221 17.5151 10.2292 17.6544C10.1327 17.7241 10.0561 17.7778 10.0028 17.8147C9.97619 17.8332 9.95536 17.8474 9.94076 17.8574L9.92357 17.869L9.91857 17.8723L9.91699 17.8734C9.91678 17.8735 9.91603 17.874 9.5 17.25ZM9.5 17.25L9.91603 17.874C9.6641 18.042 9.33549 18.0417 9.08357 17.8738L9.5 17.25Z" fill="#3BB77E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C8.67157 6 8 6.67157 8 7.5C8 8.32843 8.67157 9 9.5 9C10.3284 9 11 8.32843 11 7.5C11 6.67157 10.3284 6 9.5 6ZM6.5 7.5C6.5 5.84315 7.84315 4.5 9.5 4.5C11.1569 4.5 12.5 5.84315 12.5 7.5C12.5 9.15685 11.1569 10.5 9.5 10.5C7.84315 10.5 6.5 9.15685 6.5 7.5Z" fill="#3BB77E"/>
                  </svg>
                  <Paragraph type="p3" className="text-slate-700 font-semibold">Address:<Paragraph type="p3" className="text-slate-700 ml-[3px] font-medium">1762 School House Road</Paragraph></Paragraph>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M15.4172 17.1975C15.3497 17.1975 15.2822 17.1975 15.2072 17.19C12.7847 16.9275 10.4297 16.0875 8.39715 14.7675C6.50715 13.5675 4.87215 11.9325 3.67215 10.0425C2.35215 8.0025 1.51215 5.64 1.25715 3.2175C1.22715 2.895 1.26465 2.5875 1.36215 2.2875C1.45965 1.9875 1.62465 1.7175 1.83465 1.485C2.04465 1.2525 2.29965 1.0725 2.58465 0.945C2.87715 0.8175 3.18465 0.75 3.49965 0.75H5.74965C6.27465 0.75 6.81465 0.9375 7.23465 1.2975C7.64715 1.65 7.91715 2.145 7.99215 2.685C8.08215 3.3525 8.24715 4.0125 8.47965 4.635C8.62965 5.04 8.66715 5.475 8.56965 5.895C8.47965 6.315 8.26965 6.705 7.96965 7.005L7.42965 7.545C8.31465 8.925 9.48465 10.1025 10.8722 10.9875L11.4122 10.4475C11.7197 10.14 12.1097 9.93 12.5297 9.8475C12.9497 9.7575 13.3847 9.7875 13.7897 9.9375C14.4122 10.17 15.0722 10.335 15.7322 10.425C16.2872 10.5 16.7822 10.7775 17.1422 11.1975C17.4947 11.6175 17.6897 12.15 17.6747 12.6975V14.94C17.6747 15.255 17.6147 15.555 17.4872 15.8475C17.3597 16.1325 17.1722 16.395 16.9472 16.605C16.7147 16.815 16.4447 16.98 16.1447 17.0775C15.9047 17.16 15.6647 17.1975 15.4172 17.1975ZM5.76465 2.25H5.75715H3.49965C3.39465 2.25 3.29715 2.2725 3.19965 2.3175C3.10215 2.355 3.01215 2.415 2.94465 2.49C2.86965 2.565 2.81715 2.655 2.78715 2.76C2.75715 2.8575 2.74215 2.9625 2.74965 3.0675C2.98215 5.25 3.73965 7.38 4.93215 9.2325C6.01965 10.9425 7.49715 12.42 9.20715 13.5075C11.0522 14.7075 13.1822 15.4575 15.3572 15.6975C15.4472 15.705 15.5522 15.69 15.6497 15.66C15.7472 15.63 15.8372 15.57 15.9197 15.5025C16.0022 15.435 16.0622 15.345 16.0997 15.2475C16.1447 15.15 16.1597 15.045 16.1597 14.94V12.69C16.1597 12.6825 16.1597 12.675 16.1597 12.675C16.1672 12.4875 16.0997 12.315 15.9797 12.1725C15.8597 12.03 15.6947 11.94 15.5147 11.9175C14.7497 11.82 13.9847 11.625 13.2497 11.355C13.1147 11.3025 12.9647 11.295 12.8297 11.325C12.6872 11.355 12.5597 11.4225 12.4547 11.5275L11.5097 12.48C11.2697 12.72 10.9022 12.765 10.6097 12.6C8.61465 11.4675 6.96465 9.81 5.82465 7.8225C5.66715 7.5075 5.71215 7.14 5.95215 6.9L6.90465 5.9475C7.00215 5.85 7.06965 5.7225 7.09965 5.58C7.12965 5.4375 7.12215 5.295 7.06965 5.16C6.79215 4.425 6.60465 3.66 6.49965 2.8875C6.47715 2.715 6.38715 2.55 6.25215 2.43C6.11715 2.3175 5.94465 2.25 5.76465 2.25Z" fill="#3BB77E"/>
                  </svg>
                  <Paragraph type="p3" className="text-slate-700 font-semibold">Call Us:<Paragraph type="p3" className="text-slate-700 ml-[3px] font-medium">1233-777</Paragraph></Paragraph>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 3.75C3.08921 3.75 2.75 4.08921 2.75 4.5V13.5C2.75 13.9108 3.08921 14.25 3.5 14.25H15.5C15.9108 14.25 16.25 13.9108 16.25 13.5V4.5C16.25 4.08921 15.9108 3.75 15.5 3.75H3.5ZM1.25 4.5C1.25 3.26079 2.26079 2.25 3.5 2.25H15.5C16.7392 2.25 17.75 3.26079 17.75 4.5V13.5C17.75 14.7392 16.7392 15.75 15.5 15.75H3.5C2.26079 15.75 1.25 14.7392 1.25 13.5V4.5Z" fill="#3BB77E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.38564 4.06997C1.62318 3.73063 2.09082 3.6481 2.43016 3.88564L9.50006 8.83457L16.57 3.88564C16.9093 3.6481 17.377 3.73063 17.6145 4.06997C17.852 4.4093 17.7695 4.87695 17.4302 5.11449L9.93016 10.3645C9.67192 10.5453 9.32821 10.5453 9.06997 10.3645L1.56997 5.11449C1.23063 4.87695 1.1481 4.4093 1.38564 4.06997Z" fill="#3BB77E"/>
                  </svg>
                  <Paragraph type="p3" className="text-slate-700 font-semibold">Email:<Paragraph type="p3" className="text-slate-700 ml-[3px] font-medium">groceyshi@gmail.com</Paragraph></Paragraph>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2.25C5.77208 2.25 2.75 5.27208 2.75 9C2.75 12.7279 5.77208 15.75 9.5 15.75C13.2279 15.75 16.25 12.7279 16.25 9C16.25 5.27208 13.2279 2.25 9.5 2.25ZM1.25 9C1.25 4.44365 4.94365 0.75 9.5 0.75C14.0563 0.75 17.75 4.44365 17.75 9C17.75 13.5563 14.0563 17.25 9.5 17.25C4.94365 17.25 1.25 13.5563 1.25 9Z" fill="#3BB77E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3.75C9.91421 3.75 10.25 4.08579 10.25 4.5V9C10.25 9.41421 9.91421 9.75 9.5 9.75H6.125C5.71079 9.75 5.375 9.41421 5.375 9C5.375 8.58579 5.71079 8.25 6.125 8.25H8.75V4.5C8.75 4.08579 9.08579 3.75 9.5 3.75Z" fill="#3BB77E"/>
                  </svg>
                  <Paragraph type="p3" className="text-slate-700 font-semibold">Work hours:<Paragraph type="p3" className="text-slate-700 ml-[3px] font-medium">8:00 - 20:00, Sunday -  Thursday</Paragraph></Paragraph>
                </div>
              </div>
            </div>
          </div>

        </div>

    </main>
  );
}
