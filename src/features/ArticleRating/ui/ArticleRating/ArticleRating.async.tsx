import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from '@/features/ArticleRating/ui/ArticleRating/ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense>
    <ArticleRatingLazy {...props} />
  </Suspense>
);
