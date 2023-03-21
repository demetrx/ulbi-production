import { StateSchema } from 'app/providers/store';

export const getLoginPassword = (state: StateSchema) => state.loginForm?.password || '';
