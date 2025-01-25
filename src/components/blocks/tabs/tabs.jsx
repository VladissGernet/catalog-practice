import React from "react";

import { StyledTabs, TabButtons, Content } from './styled';

import { Button } from 'src/components/ui/button/button';

const Tabs = ({tabs}) => {
  return (
    <StyledTabs>
      <TabButtons>
        {
          tabs &&
            tabs.length &&
            tabs.map((element) => {
              return (
                <Button key={element.title}>{element.title}</Button>
              )
            })
          }
      </TabButtons>
      <Content>
        {
          tabs &&
            tabs.length &&
            tabs.map((element) => {
              return (
                <React.Fragment key={element.title}>
                  {element.content}
                </React.Fragment>
              )
            })
        }
      </Content>
    </StyledTabs>
  )
};

export { Tabs };
