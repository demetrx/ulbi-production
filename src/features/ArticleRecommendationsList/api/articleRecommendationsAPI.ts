import { rtkAPI } from 'shared/api/rtkAPI';

const recommendationsAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
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
