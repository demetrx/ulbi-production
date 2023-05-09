import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/router/routeConfig';
import { Dropdown, Icon, Popover } from 'shared/ui';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationsList } from 'entities/Notification';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(cls.navBar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('IT TODAY')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Create Article')}
        </AppLink>
        <HStack gap={16} className={cls.actions}>
          <Popover
            direction="bottom left"
            trigger={(
              <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
              </Button>
          )}
          >
            <NotificationsList />
          </Popover>

          <Dropdown
            direction="bottom left"
            items={[
              ...(isAdminPanelAvailable ? [{
                content: t('Admin Panel'),
                href: RoutePath.admin_panel,
              }] : []),
              {
                content: t('Profile'),
                href: RoutePath.profile + authData.id,
              },
              {
                content: t('Log Out'),
                onClick: onLogout,
              },
            ]}
            trigger={
              authData.avatar
                ? <Avatar size={30} src={authData.avatar} />
                : <div>{t('Navigation')}</div>
            }
          />
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
