import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');

  return (
    <div>
      {t('Article Details Page')}
    </div>
  );
};
export default memo(ArticleDetailsPage);
