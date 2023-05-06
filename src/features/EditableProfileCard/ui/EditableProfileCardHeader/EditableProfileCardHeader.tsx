import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, Button, ButtonTheme } from 'shared/ui';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (props) => {
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
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Profile')} />

      {canEdit && (
        <div>
          {readOnly
            ? (
              <Button theme={ButtonTheme.OUTLINED} onClick={handleEdit}>
                {t('Edit')}
              </Button>
            )
            : (
              <HStack gap={8}>
                <Button
                  theme={ButtonTheme.OUTLINED_RED}
                  onClick={handleCancel}
                >
                  {t('Cancel')}
                </Button>
                <Button theme={ButtonTheme.OUTLINED} onClick={handleSave}>
                  {t('Save')}
                </Button>
              </HStack>
            )}
        </div>
      )}

    </HStack>
  );
};
