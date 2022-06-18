import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";
import Card from "./Card";

import { EffectCoverflow, Pagination } from "swiper";

import Img01 from "../assets/img/img-MyProject/image 1.png";
import Img02 from "../assets/img/img-MyProject/image 2.png";
import Img03 from "../assets/img/img-MyProject/image 3.png";
import Img04 from "../assets/img/img-MyProject/image 4.png";

export default function Slider() {
  return (
    <div className="containerSlider">
      <span className="MyProject-container-text">
      <h1>Meus Projetos</h1>
      <h2>Destaques.</h2>
      </span>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0, 
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
          text='WEB NFT'
            img={Img01}
            link01={"https://natamartins.github.io/webNFT/"}
            link02={"https://github.com/natamartins/webNFT"}
            conteudo=" descubra averdadeira arte digital e colecione diversos NFTs"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
          text='Flex Blog'
            img={Img02}
            link01={"https://natamartins.github.io/FlexBlog/"}
            link02={"https://github.com/natamartins/FlexBlog"}
            conteudo="Projeto desenvolvido atravez do curso para desenvolver minhas habilidades com código "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
           text='Web Carros'
            img={Img03}
            link01={"https://natamartins.github.io/Carros/"}
            link02={"https://github.com/natamartins/Carros"}
            conteudo=" Meus Primeiro Projeto Criado usando meu conhecimento no inicio dos meus estudos."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
          text='BikCraft'
            img={Img04}
            link01={"https://natamartins.github.io/bikcraft-projetofinal/"}
            link02={"https://github.com/natamartins/bikcraft-projetofinal"}
            conteudo="esse é um Projeto completo faltando apenas a parte do backend "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
