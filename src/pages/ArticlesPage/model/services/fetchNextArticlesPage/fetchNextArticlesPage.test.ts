import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../../services/fetchArticlesList/fetchArticlesList');
describe('fetchNextArticlesPage.test', () => {
  test('fulfils successfully', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        entities: {},
        ids: [],
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4); // pending, fulfilled, 2 dispatches inside
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });

  test('fetchArticlesList not called when hasMore = false', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        entities: {},
        ids: [],
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending, fulfilled
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
  test('fetchArticlesList not called when isLoading = true', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        entities: {},
        ids: [],
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending, fulfilled
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
