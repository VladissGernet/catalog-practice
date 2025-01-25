import styled from "styled-components";

import { StyledButton } from 'src/components/ui/button/styled';

const StyledTabs = styled.div`
  && ${StyledButton} {
    margin: 0 20px 0 0;
  }
`;

const TabButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  margin-top: 20px;
`;

export { StyledTabs, TabButtons, Content };
