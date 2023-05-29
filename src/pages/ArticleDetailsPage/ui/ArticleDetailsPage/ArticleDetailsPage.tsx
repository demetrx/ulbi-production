import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import {
  DynamicModuleLoader,
  ReducersMap,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { Card, VStack } from '@/shared/ui';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import {
  ArticleDetailsPageHeader,
} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeature } from '@/shared/lib/features';

const reducers: ReducersMap = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <VStack gap={16} max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ToggleFeature
            feature="isArticleRatingEnabled"
            on={<ArticleRating articleId={id} />}
            off={<Card>{t('Article rating coming soon!')}</Card>}
          />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>

  );
};
export default memo(ArticleDetailsPage);
