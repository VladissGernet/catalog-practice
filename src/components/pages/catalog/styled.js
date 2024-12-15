import styled from "styled-components";

import {Link} from 'react-router-dom';

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
`;

const StyledLink = styled(Link)`
  display: block;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  display: block;
`;

export {StyledList, StyledLink, StyledImage, StyledListItem};
