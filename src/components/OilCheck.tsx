import { FC, useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import style from './Oil.module.scss';

import OilLevel from 'assets/app_images/OilLevel.png';
import { StyledSlider } from 'components/styled_slider/StyledSlider';
import { theme } from 'components/theme/theme';
import { ValueLabelComponent } from 'components/value_label_component/ValueLabelComponent';

export const OilCheck: FC = () => {
  const initialValue = 50;
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number);
  };

  return (
    <div className={style.container}>
      <div className={style.sliderWrapper}>
        <img src={OilLevel} alt="oil-level" className={style.oilLevelImage} />
        <ThemeProvider theme={theme}>
          <StyledSlider
            min={0}
            max={100}
            value={value}
            orientation="vertical"
            valueLabelDisplay="auto"
            onChange={handleChange}
            slots={{
              valueLabel: ValueLabelComponent,
            }}
            color="primary"
          />
        </ThemeProvider>
      </div>
    </div>
  );
};
