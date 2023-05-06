import { StateSchema } from 'app/providers/store';

export const getProfileReadOnly = (state: StateSchema) => state.profile?.readonly;
