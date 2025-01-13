import styled from "styled-components";

const StyledPrice = styled.span`
  display: block;
  font-weight: 400;
  font-size: 26px;
  line-height: 19px;
  color: ${(props) => props.theme.colorPrice};
`;

export { StyledPrice };
