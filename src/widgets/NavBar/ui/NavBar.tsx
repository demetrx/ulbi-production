import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button, ButtonTheme, Text, TextTheme, AppLink, AppLinkTheme, HStack,
} from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';

import { NotificationsButton } from '@/features/NotificationsButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './NavBar.module.scss';
import { getRouteAdminPanel } from '@/app/providers/router/config/routeConfig';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.navBar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('IT TODAY')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={getRouteAdminPanel()}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Create Article')}
        </AppLink>
        <HStack gap={16} className={cls.actions}>
          <NotificationsButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navBar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Log In')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
});
