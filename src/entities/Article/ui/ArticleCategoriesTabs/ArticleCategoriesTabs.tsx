import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui';
import { ArticleCategory } from '../../model/types/article';

interface ArticleCategoriesTabsProps {
  className?: string;
  value: string
  onClick: (value: ArticleCategory) => void
}

export const ArticleCategoriesTabs = memo((props: ArticleCategoriesTabsProps) => {
  const { className, value, onClick } = props;

  const { t } = useTranslation();
  const categoriesTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleCategory.ALL,
      content: t('All'),
    },
    {
      value: ArticleCategory.IT,
      content: t('IT'),
    },
    {
      value: ArticleCategory.ECONOMICS,
      content: t('Economics'),
    },
    {
      value: ArticleCategory.SCIENCE,
      content: t('Science'),
    },
  ], [t]);

  const handleChangeType = useCallback(({ value }: TabItem) => {
    onClick(value as ArticleCategory);
  }, [onClick]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={categoriesTabs}
      value={value}
      onTabClick={handleChangeType}
    />
  );
});
