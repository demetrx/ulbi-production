import { StateSchema } from 'app/providers/store';

export const getLoginIsLoading = (state: StateSchema) => state.loginForm?.isLoading || false;
