import React, { FC } from 'react';

import style from 'app/App.module.scss';
import { OilCheck } from 'components/OilCheck';

export const App: FC = () => {
  return (
    <div className={style.app}>
      <OilCheck />
    </div>
  );
};
