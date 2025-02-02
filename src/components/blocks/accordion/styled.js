import styled from 'styled-components';

const StyledAccordion = styled.div`
  border: 2px solid black;
`;

const StyledAccordionButton = styled.button`
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin: 0;
  padding: 10px;
  text-align: left;

  transition: all 0.3s ease;

  display: block;
  width: 100%;

  &:hover {
    opacity: 0.6;
  }
`;

const AccordionContentWrapper = styled.div`
  position: relative;
  overflow: hidden;

  height: 0;
  transition: all 0.3s ease;
`;

const AccordionContent = styled.div`
  position: absolute;
  bottom: 0;

  background-color: green;
`;

export {
  StyledAccordion,
  StyledAccordionButton,
  AccordionContent,
  AccordionContentWrapper
 };
