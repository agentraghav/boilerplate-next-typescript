import React from 'react';
import { useTranslation } from 'next-i18next';

const AppComponent: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <React.Fragment>
      <div className='next-logo'></div>
    </React.Fragment>
  );
};

export default AppComponent;
