import styled from 'styled-components';

export const StyledPageContainer = styled.main`
  margin: 20px auto 0;
  max-width: 800px;
  padding: 20px ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorForDarkBackground};
  box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.25);
  `;
