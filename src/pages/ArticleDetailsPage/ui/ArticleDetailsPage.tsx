import React, { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import {
  DynamicModuleLoader, ReducersMap,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addArticleComment } from '../model/services/addArticleComment/addArticleComment';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import {
  articleDetailsCommentsReducer, getArticleComments,
} from '../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersMap = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('articles');
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const handleSendComment = useCallback((text: string) => {
    dispatch(addArticleComment(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return <Text title={t('Article not found!')} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={handleSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>

  );
};
export default memo(ArticleDetailsPage);
