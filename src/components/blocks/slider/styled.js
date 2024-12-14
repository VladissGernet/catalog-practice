import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

import 'swiper/css';
import 'swiper/css/navigation';

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
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid black;

  &::after {
    font-size: 24px;
  }

  &:hover {
      opacity: 0.6;
  }

  &.swiper-button-prev {
    left: 0;
  }

  &.swiper-button-next {
    right: 0;
  }
`;

const StyledProductSlider = styled.div`
  position: relative;
  padding: 0 20px;
  width: 280px;
`;

export {
  StyledSwiper,
  StyledSwiperSlide,
  StyledSwiperImage,
  StyledButton,
  StyledProductSlider
};
