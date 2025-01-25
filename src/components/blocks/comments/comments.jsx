import React, { useState } from 'react';

import { StyledComments } from './styled';

import { Button } from 'src/components/ui/button/button';

const commentsText = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nam senectus metus pulvinar diam venenatis velit dolor varius. Ultrices montes malesuada rutrum ut accumsan taciti gravida. Porttitor class bibendum purus dui dis amet. Conubia sollicitudin pharetra vivamus himenaeos volutpat volutpat. Pretium cursus nulla interdum felis ad montes imperdiet accumsan. Torquent euismod nec ac eleifend condimentum. Netus ridiculus arcu sociosqu odio orci. Lorem ipsum odor amet, consectetuer adipiscing elit. Nam senectus metus pulvinar diam venenatis velit dolor varius. Ultrices montes malesuada rutrum ut accumsan taciti gravida. Porttitor class bibendum purus dui dis amet. Conubia sollicitudin pharetra vivamus himenaeos volutpat volutpat. Pretium cursus nulla interdum felis ad montes imperdiet accumsan. Torquent euismod nec ac eleifend condimentum. Netus ridiculus arcu sociosqu odio orci.';
const CommentsButtonStatus = {
  true: 'Скрыть',
  false: 'Подробнее'
}

const Comments = () => {
  const [buttonStatus, setButtonStatus] = useState(false)

  return (
    <>
      <StyledComments>
        {buttonStatus ? commentsText : commentsText.slice(0, 100) + '...'}
      </StyledComments>
      <Button onButtonClick={() => setButtonStatus(!buttonStatus)}>{CommentsButtonStatus[buttonStatus]}</Button>
    </>
  )
};

export { Comments };
