import React, { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import {
  DynamicModuleLoader,
  ReducersMap,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page';
import {
  ArticleDetailsPageHeader,
} from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
  fetchCommentsByArticleId,
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addArticleComment } from '../model/services/addArticleComment/addArticleComment';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleRecommendations } from '../model/slice/articleDetailsRecommendationsSlice';
import { getArticleRecommendationsLoading } from '../model/selectors/recommendations';
import {
  fetchArticleRecommendations,
} from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slice';

const reducers: ReducersMap = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('articles');
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsLoading);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const handleSendComment = useCallback((text: string) => {
    dispatch(addArticleComment(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <Page>
        <Text title={t('Article not found!')} />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text size={TextSize.L} className={cls.commentTitle} title={t('Recommend')} />
        <ArticleList
          className={cls.recommendations}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          target="_blank"
        />
        <Text size={TextSize.L} className={cls.commentTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={handleSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>

  );
};
export default memo(ArticleDetailsPage);
