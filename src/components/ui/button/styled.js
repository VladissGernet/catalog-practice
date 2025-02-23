import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colorForButton};
  color: white;
  cursor: pointer;
  box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.25);

  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colorForButtonHover};
  }

  &:active {
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export { StyledButton };
