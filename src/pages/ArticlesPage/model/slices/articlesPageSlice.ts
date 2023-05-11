import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import {
  Article, ArticleCategory, ArticleSortField, ArticleView,
} from '@/entities/Article';
import { ARTICLES_VIEW_LS_KEY } from '@/shared/consts/localStorage';
import { SortOrder } from '@/shared/types/sort';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';

const initialState: ArticlesPageSchema = {
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
  view: ArticleView.TILE,
  page: 1,
  hasMore: true,
  limit: 9,
  sortField: ArticleSortField.CREATED,
  order: 'asc',
  search: '',
  category: ArticleCategory.ALL,
  _initialized: false,
};

const articlesAdapter = createEntityAdapter<Article>();

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LS_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSortField: (state, action: PayloadAction<ArticleSortField>) => {
      state.sortField = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleCategory>) => {
      state.category = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LS_KEY) as ArticleView ?? ArticleView.TILE;
      state.view = view;
      state.limit = view === ArticleView.LIST ? 4 : 9;
      state._initialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: articlesPageActions,
  reducer: articlesPageReducer,
} = articlesPageSlice;
