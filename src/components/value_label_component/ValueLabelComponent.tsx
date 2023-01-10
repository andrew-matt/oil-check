import { FC } from 'react';

import { SliderValueLabelProps } from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';

export const ValueLabelComponent: FC<SliderValueLabelProps> = ({ children, value }) => {
  return (
    <Tooltip enterTouchDelay={0} arrow placement="right" title={`${value}%`}>
      {children}
    </Tooltip>
  );
};
