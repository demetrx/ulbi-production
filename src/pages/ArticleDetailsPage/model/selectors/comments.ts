import { StateSchema } from 'app/providers/store';

const getArticleCommentsIsLoading = (state: StateSchema) => (
  state.articleDetailsPage?.comments.isLoading
);
const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments.error;

export { getArticleCommentsError, getArticleCommentsIsLoading };
