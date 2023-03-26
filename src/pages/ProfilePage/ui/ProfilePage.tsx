import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReducersMap, withAsyncReducers } from 'shared/lib/hocs';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersMap = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  return (
    <div>
      {t('Profile Page')}
    </div>
  );
});
export default withAsyncReducers(ProfilePage, { reducers });
