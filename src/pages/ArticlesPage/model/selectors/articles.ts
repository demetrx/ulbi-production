import { StateSchema } from 'app/providers/store';

const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;

export { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView };
