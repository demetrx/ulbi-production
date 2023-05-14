import { rtkAPI } from '@/shared/api/rtkAPI';
import { Rating } from '@/entities/Rating';

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

type rateArticleArg = GetArticleRatingArg & Rating;

const articleRatingAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, rateArticleArg>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } = articleRatingAPI;
