import styled, {css} from "styled-components";

import { Title } from 'src/components/ui/title/title';

const titleStyles = css`
  background-color: red;
`;

// Дополняю стили для компонента.
const StyledTitle = styled(Title)`
  ${titleStyles}
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;


export {StyledSection, StyledTitle}

