import { StateSchema } from 'app/providers/store';

const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;

export { getArticleCommentsError, getArticleCommentsIsLoading };
