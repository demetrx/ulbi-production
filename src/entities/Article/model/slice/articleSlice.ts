import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    reducer: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
} = articleDetailsSlice;
