import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  Button, ButtonTheme, Drawer, Icon, Popover,
} from 'shared/ui';
import { NotificationsList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import cls from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
  const { className } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useDevice();

  const handleOpenDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const handleCloseDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const trigger = (
    <Button onClick={handleOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  if (isMobile) {
    return (
      <>
        {trigger}
        <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
          <NotificationsList />
        </Drawer>
      </>
    );
  }

  return (
    <Popover
      className={classNames(cls.notificationsButton, {}, [className])}
      direction="bottom left"
      trigger={trigger}
    >
      <NotificationsList className={cls.notifications} />
    </Popover>

  );
});
