import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Main Page')}
    </div>
  );
};

export default MainPage;
