import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  Button, ButtonTheme, Icon, Popover,
} from 'shared/ui';
import { NotificationsList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import cls from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={classNames(cls.notificationsButton, {}, [className])}
      direction="bottom left"
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      )}
    >
      <NotificationsList className={cls.notifications} />
    </Popover>
  );
});
