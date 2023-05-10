import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';
import { useGetNotificationsQuery } from '../../api/notificationsAPI';
import cls from './NotificationsList.module.scss';

interface NotificationsListProps {
  className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
  const { className } = props;

  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack gap={16} max className={classNames(cls.notificationsList, {}, [className])}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack gap={16} max className={classNames(cls.notificationsList, {}, [className])}>
      {data?.map((item) => (
        <NotificationsItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
