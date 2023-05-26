import { rtkAPI } from '@/shared/api/rtkAPI';
import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/UserSchema';

interface SetJsonSettingsArgs {
  userId: string;
  jsonSettings: JsonSettings;
}

const userAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArgs>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: { jsonSettings },
      }),
    }),
  }),
});

export const setJsonSettingsMutation = userAPI.endpoints.setJsonSettings.initiate;
