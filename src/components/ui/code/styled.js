import styled from 'styled-components';

export const StyledCode = styled.span`
  display: block;
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: {(props) => props.theme.colorCode};
`;
