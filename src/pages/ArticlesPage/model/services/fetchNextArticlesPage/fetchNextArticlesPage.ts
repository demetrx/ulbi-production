import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../../selectors/articles';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (!hasMore || isLoading) {
      return;
    }

    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticlesList({
      page: page + 1,
    }));
  },
);
