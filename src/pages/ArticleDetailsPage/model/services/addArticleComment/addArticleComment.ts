import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/store';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

const addArticleComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'addCommentForm/sendComment',
  async (text, thunkAPI) => {
    const {
      extra, rejectWithValue, dispatch, getState,
    } = thunkAPI;

    const state = getState();

    const userId = getUserAuthData(state)?.id;
    const articleId = getArticleDetailsData(state)?.id;

    if (!text || !articleId || !userId) {
      return rejectWithValue(('invalid data'));
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        userId,
        articleId,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleId));

      return response.data;
    } catch (e) {
      return rejectWithValue(('error'));
    }
  },
);

export { addArticleComment };
