import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInitialized } from '../../selectors/articles';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const initialized = getArticlesPageInitialized(getState());

    if (initialized) {
      return;
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  },
);
