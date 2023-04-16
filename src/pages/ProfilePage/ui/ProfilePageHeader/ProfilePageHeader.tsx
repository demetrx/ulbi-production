import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData && authData.id === profileData?.id;

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />

      {canEdit && (
      <div className={cls.btnWrapper}>
        {readOnly
          ? (
            <Button theme={ButtonTheme.OUTLINED} onClick={handleEdit} className={cls.editBtn}>
              {t('Edit')}
            </Button>
          )
          : (
            <>
              <Button
                theme={ButtonTheme.OUTLINED_RED}
                onClick={handleCancel}
                className={cls.cancelBtn}
              >
                {t('Cancel')}
              </Button>
              <Button theme={ButtonTheme.OUTLINED} onClick={handleSave} className={cls.saveBtn}>
                {t('Save')}
              </Button>
            </>
          )}
      </div>
      )}

    </div>
  );
};
