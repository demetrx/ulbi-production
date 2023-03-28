import React, { memo, useEffect } from 'react';
import { ReducersMap, withAsyncReducers } from 'shared/lib/hocs';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks';

const reducers: ReducersMap = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfileCard />
    </div>
  );
});
export default withAsyncReducers(ProfilePage, { reducers });
