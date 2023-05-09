import { rtkAPI } from 'shared/api/rtkAPI';

import { Notification } from '../model/types/notification';

const recommendationsAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = recommendationsAPI;
