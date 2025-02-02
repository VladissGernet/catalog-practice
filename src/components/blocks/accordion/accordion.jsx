import React, { useState, useRef, useEffect } from 'react';

import {
  StyledAccordion,
  StyledAccordionButton,
  AccordionContent,
  AccordionContentWrapper
 } from './styled';

const Accordion = ({tabs}) => {
  // Создаю массив высот в useState длиной количества tabs или заполняю его нулями.
  const [heights, setHeight] = useState(Array(tabs.length).fill(0));
  // Создаю массив активных tabs в useState длиной количества tabs или заполняю его нулями.
  const [activeTabs, setActiveTabs] = useState(Array(tabs.length).fill(false));
  // Создаю массив ссылок на контент.
  const ContentRefs = useRef([]);

  // Обработчик события клика по кнопке открытия контента в accordion.
  const AccordionHandler = (index) => {
    // Создаю новый массив высот копируя из предыдущего.
    const newHeights = [...heights];
    // Перезаписываю высоту элемента с индексом index.
    newHeights[index] = ContentRefs.current[index].scrollHeight;
    // Записываю новый массив высот в useState и вызываю тем самым перерисовку.
    setHeight(newHeights);

    // Создаю новый массив активных tabs копируя из предыдущего.
    const newActiveTabs = [...activeTabs];
    // Перезаписываю активность элемента с индексом index.
    newActiveTabs[index] = !activeTabs[index];
    // Записываю новый массив активных tabs в useState и вызываю тем самым перерисовку.
    setActiveTabs(newActiveTabs);
  };

  // Вызов перерисовки при изменении контента в accordion.
  useEffect(() => {
    // Создаю новый массив высот копируя из предыдущего.
    const newHeights = [...heights];
    // Перезаписываю высоту элемента с индексом index.
    newHeights.forEach((_, index) => {
      newHeights[index] = ContentRefs.current[index].scrollHeight;
    });
    // Записываю новый массив высот в useState и вызываю тем самым перерисовку.
    setHeight(newHeights);

  }, [tabs]);

  return (
    <StyledAccordion>
      {
        tabs
        && tabs.length
        && tabs.map((element, index) => (
          <React.Fragment key={element.title}>
            {/* Необходимо в onClick ставить функцию, чтобы вызвалось AccordionHandler при каждом клике */}
            <StyledAccordionButton type="button" onClick={() => AccordionHandler(index)}>
              {element.title}
            </StyledAccordionButton>
            {/* В React высота height по умолчанию подставляется в пикселях, поэтому можно так. */}
            <AccordionContentWrapper
              style={
                activeTabs[index]
                ? {height: heights[index]}
                : {height: 0 }
              }
            >
            {/* Создаю ссылку на элемент и перемещаю в массив ContentRefs.current */}
              <AccordionContent
                ref={(el) => ContentRefs.current[index] = el}
              >
                {element.content}
              </AccordionContent>
            </AccordionContentWrapper>
          </React.Fragment>
        ))
      }

    </StyledAccordion>
  )
};

export { Accordion };
