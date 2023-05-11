import { StateSchema } from '@/app/providers/store';

const getArticleRecommendationsLoading = (state: StateSchema) => (
  state.articleDetailsPage?.recommendations?.isLoading
);
const getArticleRecommendationsError = (state: StateSchema) => (
  state.articleDetailsPage?.recommendations?.error
);

export { getArticleRecommendationsLoading, getArticleRecommendationsError };
