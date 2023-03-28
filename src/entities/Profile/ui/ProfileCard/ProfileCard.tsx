import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className } = props;
  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  const { t } = useTranslation('profile');

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button theme={ButtonTheme.OUTLINED} className={cls.editBtn}>
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.body}>
        <Input value={data?.firstName} placeholder={t('Your first name')} className={cls.input} />
        <Input value={data?.lastName} placeholder={t('Your last name')} className={cls.input} />
      </div>
    </div>
  );
});
