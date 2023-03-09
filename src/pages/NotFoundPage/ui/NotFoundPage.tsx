import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFoundPage)}>
      {t('Page not found')}
    </div>
  );
};
