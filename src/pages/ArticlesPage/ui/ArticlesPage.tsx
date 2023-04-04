import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');

  return (
    <div>
      {t('Articles Page')}
    </div>
  );
};
export default memo(ArticlesPage);
