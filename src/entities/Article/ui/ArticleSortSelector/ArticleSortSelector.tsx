import React, { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui';
import { SortOrder } from 'shared/types/sort';
import { ArticleSortField } from '../../model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sortField: ArticleSortField
  order: SortOrder
  onChangeFilter: (newFilter: ArticleSortField) => void
  onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, sortField, order, onChangeOrder, onChangeFilter,
  } = props;

  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    { value: 'asc', content: t('ascending') },
    { value: 'desc', content: t('descending') },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    { value: ArticleSortField.CREATED, content: t('publication date') },
    { value: ArticleSortField.VIEWS, content: t('views') },
    { value: ArticleSortField.TITLE, content: t('title') },
  ], [t]);

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        label={t('Sort by')}
        options={sortFieldOptions}
        value={sortField}
        onChange={onChangeFilter}
      />
      <Select
        className={cls.order}
        label={t('order')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
