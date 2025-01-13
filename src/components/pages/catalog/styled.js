import styled from "styled-components";

import {Link} from 'react-router-dom';

import { StyledTitle } from 'src/components/ui/title/styled';
import { StyledPrice } from 'src/components/ui/price/styled';

const StyledSection = styled.section`
  ${StyledTitle} {
    margin-bottom: 40px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.25);
  padding: 20px;

  ${StyledPrice} {
    margin-top: 20px;
    color: ${(props) => props.theme.colorPrice};
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colorLink};
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  display: block;
`;

export {StyledSection, StyledList, StyledLink, StyledImage, StyledListItem};
