import { StateSchema } from '@/app/providers/store';
import { ArticleCategory, ArticleSortField, ArticleView } from '@/entities/Article';
import { buildSelector } from '@/shared/store';

const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.TILE;
const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
const getArticlesPageInitialized = (state: StateSchema) => state.articlesPage?._initialized;
const getArticlesPageFilter = (state: StateSchema) => (
  state.articlesPage?.sortField ?? ArticleSortField.CREATED
);
const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
const getArticlesPageCategory = (state: StateSchema) => (
  state.articlesPage?.category ?? ArticleCategory.ALL
);

export const [useGetArticleItemById] = buildSelector(
  (state, id: string) => state.articlesPage?.entities[id],
);

export {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageNum,
  getArticlesPageLimit,
  getArticlesPageHasMore,
  getArticlesPageInitialized,
  getArticlesPageFilter,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageCategory,
};
