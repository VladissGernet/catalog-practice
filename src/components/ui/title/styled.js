import styled from 'styled-components';
import { TitleSizes } from './title';

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: ${(props) => {
    let fontSize;
    switch (props.$size) {
      case TitleSizes.BIG:
        fontSize = '40px';
        break;
      case TitleSizes.MEDIUM:
        fontSize = '36px';
        break;
      case TitleSizes.SMALL:
        fontSize = '24px';
        break;
      default:
        fontSize = '36px';
        break;
    }

    return fontSize;
  }}
`;
