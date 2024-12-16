import styled from "styled-components";

import { Title } from 'src/components/ui/title/title';
import { Price } from 'src/components/blocks/price/price';

const StyledTitle = styled(Title)`
  margin-top: 200px !important;
  line-height: 54px;
`;

const StyledPrice = styled(Price)`
  margin-top: 20px;
  outline: 2px solid #000000;
  display: none;
`;

export {StyledTitle, StyledPrice}

