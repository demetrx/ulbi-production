import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingAPI';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui';

export interface ArticleRatingProps {
  className?: string;
  articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;

  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const userId = userData?.id!;
  const { data, isLoading } = useGetArticleRatingQuery({ articleId, userId });
  const [rateArticle] = useRateArticleMutation();

  const handleRateArticle = useCallback((starCount: number, feedback?: string) => {
    try {
      rateArticle({
        rate: starCount, articleId, userId, feedback,
      });
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }, [articleId, rateArticle, userId]);

  const handleAccept = useCallback((starCount: number, feedback?: string) => {
    handleRateArticle(starCount, feedback);
  }, [handleRateArticle]);

  const handleCancel = useCallback((starCount: number) => {
    handleRateArticle(starCount);
  }, [handleRateArticle]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={handleAccept}
      onCancel={handleCancel}
      rate={rating?.rate}
      hasFeedback
      feedbackTitle={t('Please, leave your feedback, as this will help us to improve')}
      title={t('Rate the article')}
      className={className}
    />
  );
});

export default ArticleRating;
