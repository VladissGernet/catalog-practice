import styled from "styled-components";

import { StyledTitle } from 'src/components/ui/title/styled';
import { StyledCode } from 'src/components/ui/code/styled';
import { StyledProductSlider } from 'src/components/blocks/slider/styled';
import { CounterWrapper } from 'src/components/blocks/counter/styled';
import { StyledPrice } from 'src/components/ui/price/styled';
import { StyledDelivery } from 'src/components/ui/delivery/styled';
import { StyledButton } from 'src/components/ui/button/styled';
import { StyledTabs } from 'src/components/blocks/tabs/styled';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "code code"
    "slider price"
    "slider counter"
    "slider delivery"
    "slider button"
    "slider ."
    "tabs tabs";

  ${StyledTitle} {
    grid-area: title;

    margin-bottom: 20px;
  }

  ${StyledCode} {
    grid-area: code;
    margin-bottom: 20px;
  }

  ${StyledProductSlider} {
    grid-area: slider;
  }

  ${CounterWrapper} {
    grid-area: counter;
  }

  ${StyledPrice} {
    grid-area: price;
    margin-bottom: 10px;
  }

  ${StyledDelivery} {
    grid-area: delivery;
  }

  ${StyledButton} {
    grid-area: button;
    margin-top: 40px;
  }

  ${StyledTabs} {
    grid-area: tabs;

    margin-top: 30px;
  }
`;

export {StyledSection}

