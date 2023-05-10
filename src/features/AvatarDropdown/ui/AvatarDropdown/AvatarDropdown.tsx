import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/router/routeConfig';
import { Avatar, Dropdown } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames(cls.avatarDropdown, {}, [className])}
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
  );
});
