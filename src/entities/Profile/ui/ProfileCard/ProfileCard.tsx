import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Text, TextAlign, TextTheme, Input, Loader, Avatar,
} from '@/shared/ui';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
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
      <HStack
        justify="center"
        max
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.profileCard, {}, [className, cls.error])}
      >
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.Error}
          title={t('An error occurred while loading')}
          text={t('Please, try to refresh the page')}
        />
      </HStack>
    );
  }

  return (
    <VStack
      gap={8}
      max
      className={classNames(cls.profileCard, { [cls.editing]: !readonly }, [className])}
    >
      {data?.avatar && (
      <HStack justify="center" max className={cls.avatarWrapper}>
        <Avatar src={data.avatar} size={100} />
      </HStack>
      )}
      <Input
        readOnly={readonly}
        value={data?.firstName}
        onChange={onChangeFirstName}
        placeholder={t('Your first name')}
        className={cls.input}
        data-testid="ProfileCard.firstName"
      />
      <Input
        readOnly={readonly}
        onChange={onChangeLastName}
        value={data?.lastName}
        placeholder={t('Your last name')}
        className={cls.input}
        data-testid="ProfileCard.lastName"
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
    </VStack>
  );
});
