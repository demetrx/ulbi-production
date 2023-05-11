import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { ArticleCategory, ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInitialized } from '../../selectors/articles';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const initialized = getArticlesPageInitialized(getState());

    if (initialized) {
      return;
    }

    const orderFromUrl = searchParams.get('order') as SortOrder;
    const sortFromUrl = searchParams.get('sort') as ArticleSortField;
    const categoryFromUrl = searchParams.get('category') as ArticleCategory;
    const searchFromUrl = searchParams.get('search');

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl));
    }
    if (sortFromUrl) {
      dispatch(articlesPageActions.setSortField(sortFromUrl));
    }
    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl));
    }
    if (categoryFromUrl) {
      dispatch(articlesPageActions.setType(categoryFromUrl));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ }));
  },
);
