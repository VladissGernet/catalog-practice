import React from 'react';

import {
  StyledSwiper,
  StyledSwiperSlide,
  StyledSwiperImage,
  StyledButton
} from './styled';

import { Navigation } from 'swiper/modules';

const ProductSlider = ({mockDataObject}) => {
  return (
    <>
    <StyledSwiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      modules={[Navigation]}
    >
      {mockDataObject.images.map((image, index) => (
        <StyledSwiperSlide key={image}>
          <StyledSwiperImage src={image} alt={`image ${index + 1}`} />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>

    <StyledButton className="swiper-button-prev" />
    <StyledButton className="swiper-button-next" />
    </>
  )
}

export { ProductSlider };

