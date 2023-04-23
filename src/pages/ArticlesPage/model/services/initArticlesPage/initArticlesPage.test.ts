import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../../services/fetchArticlesList/fetchArticlesList');
describe('initArticlesPage.test', () => {
  test('fulfils successfully when not initialized', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        entities: {},
        ids: [],
        limit: 5,
        isLoading: false,
        hasMore: true,
        _initialized: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4); // pending, fulfilled, 2 dispatches inside
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
  });

  test('stops when initialized', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        entities: {},
        ids: [],
        limit: 5,
        isLoading: false,
        hasMore: false,
        _initialized: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending, fulfilled
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
