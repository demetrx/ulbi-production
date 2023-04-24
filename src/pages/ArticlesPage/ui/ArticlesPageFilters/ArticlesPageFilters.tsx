import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  ArticleSortField, ArticleView, ArticleViewSelector, ArticleSortSelector,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Card, Input } from 'shared/ui';
import { SortOrder } from 'shared/types/sort';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageFilter, getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageView,
} from '../../model/selectors/articles';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlePageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sortField = useSelector(getArticlesPageFilter);
  const search = useSelector(getArticlesPageSearch);
  const order = useSelector(getArticlesPageOrder);

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const handleChangeFilter = useCallback((filter: ArticleSortField) => {
    dispatch(articlesPageActions.setSortField(filter));
  }, [dispatch]);

  const handleChangeOrder = useCallback((order: SortOrder) => {
    dispatch(articlesPageActions.setOrder(order));
  }, [dispatch]);

  const handleChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search));
  }, [dispatch]);

  return (
    <div className={classNames(cls.articlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sortField={sortField}
          order={order}
          onChangeFilter={handleChangeFilter}
          onChangeOrder={handleChangeOrder}
        />
        <ArticleViewSelector view={view} onViewClick={handleChangeView} />
      </div>

      <Card className={cls.search}>
        <Input
          value={search}
          onChange={handleChangeSearch}
          placeholder={t('Search')}
        />
      </Card>
    </div>
  );
});
