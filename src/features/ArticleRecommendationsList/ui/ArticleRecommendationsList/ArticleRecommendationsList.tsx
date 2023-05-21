import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize, VStack } from '@/shared/ui';
import { ArticleList } from '@/entities/Article';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsAPI';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data: articles, isLoading, error } = useGetArticleRecommendationsListQuery(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack
      data-testid="ArticleRecommendationsList"
      gap={8}
      className={classNames('', {}, [className])}
    >
      <Text size={TextSize.L} title={t('Recommend')} />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
});
