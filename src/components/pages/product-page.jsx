import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {PageContainer} from 'src/components/layout/page-container/page-container';
import {StyledTitle} from './styled';
import {TitleSizes} from 'src/components/ui/title/title';
import {Code} from 'src/components/ui/code/code';

const mockData = [
  {
    title: '3D-Принтер',
    code: '2840367',
    images: [
      'https://i.ibb.co/gPCq1G4/image.png',
      'https://sun9-16.userapi.com/impg/ZSNsvA1w_nSLiENHhznerhzJE5V2jtan3cf6hQ/LR86c549JRs.jpg?size=765x535&quality=95&sign=ffdcf39c7e03e9751557ba78dc4901a7&c_uniq_tag=I11XrPeDgrz6JcefvD5emkAo3E75eL4jhUqaN3hfZlA&type=album',
      'https://rd-robot.ru/assets/images/products/1750/large/high-quality-diy-anet-a8-acrylic-frame.jpg',
    ],
  },
];

// Swiper styles start
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
  width: 200px;
  height: 257px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  user-select: none;
`;

const StyledSwiperImage = styled.img`
  max-width: 100%;
  max-height: 257px;
`

const StyledButton = styled.div`
  background-color: white; /* Change to your desired color */
  border-radius: 50%;
  border: 2px solid black; /* Optional border */

  &::after {
    font-size: 24px;
  }
`;
// Swiper styles end

// Остановился на добавлении img и Swiper.

const ProductPage = () => {
  return (
    <PageContainer>
      <StyledTitle size={TitleSizes.BIG}>{mockData[0].title}</StyledTitle>
      <Code>{mockData[0].code}</Code>

      <StyledSwiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
        modules={[Navigation]}
      >

      {mockData[0].images.map((image, index) => (
          <StyledSwiperSlide key={image}>
            <StyledSwiperImage src={image} alt={`image ${index + 1}`} />
          </StyledSwiperSlide>
      ))}
      </StyledSwiper>



      <StyledButton className="swiper-button-prev" />
      <StyledButton className="swiper-button-next" />
    </PageContainer>
  );
};

export default ProductPage;
