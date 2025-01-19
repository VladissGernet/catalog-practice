import styled from "styled-components";

import { StyledButton } from 'src/components/ui/button/styled';

const StyledPopUp = styled.dialog`
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;

  width: 400px;
  min-height: 300px;

  && ${StyledButton} {
    margin-top: 0;
    margin-left: auto;
  }
`;

const StyledPopUpHeader = styled.header`
  display: flex;
`;

export { StyledPopUp, StyledPopUpHeader };
