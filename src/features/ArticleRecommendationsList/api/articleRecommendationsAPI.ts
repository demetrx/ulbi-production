import { rtkAPI } from '@/shared/api/rtkAPI';
import { Article } from '@/entities/Article';

const recommendationsAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        // обычный axios get
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetArticleRecommendationsListQuery } = recommendationsAPI;
