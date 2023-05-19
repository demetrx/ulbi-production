import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.notFoundPage)} dataTestId="NotFoundPage">
      {t('Page not found')}
    </Page>
  );
});
