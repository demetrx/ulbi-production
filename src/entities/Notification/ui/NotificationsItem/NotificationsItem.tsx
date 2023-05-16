import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, Text, CardTheme } from '@/shared/ui';
import { Notification } from '../../model/types/notification';
import cls from './NotificationsItem.module.scss';

interface NotificationsItemProps {
  className?: string;
  item: Notification
}

export const NotificationsItem = memo((props: NotificationsItemProps) => {
  const { className, item } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.notificationsItem, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a className={cls.link} href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
