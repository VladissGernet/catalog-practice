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
  background-color: white; /* Change to your desired color */
  border-radius: 50%;
  border: 2px solid black; /* Optional border */

  &::after {
    font-size: 24px;
  }
`;

export {
  StyledSwiper,
  StyledSwiperSlide,
  StyledSwiperImage,
  StyledButton
};
