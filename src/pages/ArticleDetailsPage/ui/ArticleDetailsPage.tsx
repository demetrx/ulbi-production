import React, { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('articles');

  if (!id) {
    return <Text title={t('Article not found!')} />;
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};
export default memo(ArticleDetailsPage);
