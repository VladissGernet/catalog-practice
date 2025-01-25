import React, { useState } from "react";

import { StyledTabs, TabButtons, Content } from './styled';

import { Button } from 'src/components/ui/button/button';

const Tabs = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTabs>
      <TabButtons>
        {
          tabs &&
            tabs.length &&
            tabs.map((element, index) => {
              if (index === activeTab) {
                return (
                  <Button key={element.title} isDisabled>{element.title}</Button>
                )
              }
              return (
                <Button key={element.title} onButtonClick={() => setActiveTab(index)}>{element.title}</Button>
              )
            })
          }
      </TabButtons>
      <Content>
        {
          tabs &&
            tabs.length &&
            tabs.map((element, index) => {
              if (index === activeTab) {
                return (
                  <React.Fragment key={element.title}>
                    {element.content}
                  </React.Fragment>
                )
              }
            })
        }
      </Content>
    </StyledTabs>
  )
};

export { Tabs };
