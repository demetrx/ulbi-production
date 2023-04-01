import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/ProfileSchema';

interface ProfileCardProps {
  className?: string;
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstName?: (value?: string) => void
  onChangeLastName?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: Currency) => void
  onChangeCountry?: (value?: Country) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.Error}
          title={t('An error occurred while loading')}
          text={t('Please, try to refresh the page')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, { [cls.editing]: !readonly }, [className])}>
      {data?.avatar && (
      <div className={cls.avatarWrapper}>
        <Avatar src={data.avatar} size={100} />
      </div>
      )}
      <Input
        readOnly={readonly}
        value={data?.firstName}
        onChange={onChangeFirstName}
        placeholder={t('Your first name')}
        className={cls.input}
      />
      <Input
        readOnly={readonly}
        onChange={onChangeLastName}
        value={data?.lastName}
        placeholder={t('Your last name')}
        className={cls.input}
      />
      <Input
        readOnly={readonly}
        onChange={onChangeAge}
        value={data?.age}
        type="number"
        placeholder={t('Your age')}
        className={cls.input}
      />
      <Input
        readOnly={readonly}
        onChange={onChangeCity}
        value={data?.city}
        placeholder={t('City')}
        className={cls.input}
      />
      <Input
        readOnly={readonly}
        onChange={onChangeUsername}
        value={data?.username}
        placeholder={t('Username')}
        className={cls.input}
      />
      <Input
        readOnly={readonly}
        onChange={onChangeAvatar}
        value={data?.avatar}
        placeholder={t('Link to the avatar')}
        className={cls.input}
      />

      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readOnly={readonly}
      />

      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readOnly={readonly}
      />
    </div>
  );
});
