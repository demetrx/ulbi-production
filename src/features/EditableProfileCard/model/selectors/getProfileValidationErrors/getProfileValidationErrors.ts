import { StateSchema } from 'app/providers/store';

export const getProfileValidationErrors = (state: StateSchema) => state.profile?.validationErrors;
