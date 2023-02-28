import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

export const NotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage)}>
      {t('Page not found')}
    </div>
  );
};
