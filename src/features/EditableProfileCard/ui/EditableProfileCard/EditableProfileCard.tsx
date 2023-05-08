import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui';
import { ProfileCard } from 'entities/Profile';
import {
  DynamicModuleLoader, ReducersMap,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import {
  EditableProfileCardHeader,
} from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import {
  getProfileValidationErrors,
} from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';

interface EditableProfileCardProps {
  className?: string;
  id?: string
}

const reducers: ReducersMap = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;

  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadOnly);
  const validationErrors = useSelector(getProfileValidationErrors);

  const validationErrorTranslations = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    [ValidateProfileError.WRONG_COUNTRY]: t('Incorrect country'),
    [ValidateProfileError.WRONG_AGE]: t('Incorrect age'),
    [ValidateProfileError.WRONG_USER_DATA]: t('First and last name are required'),
    [ValidateProfileError.NO_DATA]: t('No data provided'),
  };

  useInitialEffect(() => {
    dispatch(fetchProfileData(id));
  });

  const handleChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstName: value || '' }));
  }, [dispatch]);

  const handleChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value || '' }));
  }, [dispatch]);

  const handleChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const handleChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const handleChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const handleChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const handleChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const handleChangeCountry = useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap={8} max className={classNames('', {}, [className])}>
        <EditableProfileCardHeader />
        {validationErrors?.length && validationErrors.map((err) => (
          <Text
            key={err}
            theme={TextTheme.Error}
            text={validationErrorTranslations[err]}
            data-testid="EditableProfileCard.Error"
          />
        ))}
        <ProfileCard
          readonly={readOnly}
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={handleChangeFirstName}
          onChangeLastName={handleChangeLastName}
          onChangeAge={handleChangeAge}
          onChangeCity={handleChangeCity}
          onChangeUsername={handleChangeUsername}
          onChangeAvatar={handleChangeAvatar}
          onChangeCurrency={handleChangeCurrency}
          onChangeCountry={handleChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
