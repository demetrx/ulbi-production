import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { Article } from '@/entities/Article';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';
import {
  fetchArticleRecommendations,
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const initialState: ArticleDetailsRecommendationsSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
};

const recommendationsAdapter = createEntityAdapter<Article>();

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

export const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendations',
  initialState:
    recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice;
