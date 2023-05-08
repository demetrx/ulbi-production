import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const handleSendComment = useCallback((text: string) => {
    dispatch(addArticleComment(text));
  }, [dispatch]);

  return (
    <VStack gap={16} max className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Comments')} />
      <AddCommentForm onSendComment={handleSendComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  );
});
