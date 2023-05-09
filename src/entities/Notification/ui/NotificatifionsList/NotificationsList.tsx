import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useGetNotificationsQuery } from '../../api/notificationsAPI';
import cls from './NotificationsList.module.scss';

interface NotificationsListProps {
  className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const { data, isLoading } = useGetNotificationsQuery(null);

  return (
    <div className={classNames(cls.noticationsList, {}, [className])}>

    </div>
  );
});
