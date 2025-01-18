import styled from "styled-components";

const StyledPopUp = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
`;

export { StyledPopUp };
