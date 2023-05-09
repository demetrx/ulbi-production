import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationsItem.module.scss';

interface NotificationsItemProps {
  className?: string;
}

export const NotificationsItem = memo((props: NotificationsItemProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotificationsItem, {}, [className])}>

    </div>
  );
});
