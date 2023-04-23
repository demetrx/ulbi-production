import { StateSchema } from 'app/providers/store';

const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;
const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

export {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageNum,
  getArticlesPageLimit,
  getArticlesPageHasMore,
};
