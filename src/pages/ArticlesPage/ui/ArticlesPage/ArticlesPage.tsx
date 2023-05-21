import React, { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersMap,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks';
import { Page } from '@/widgets/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  articlesPageReducer,
} from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import {
  fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

const reducers: ReducersMap = { articlesPage: articlesPageReducer };

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const loadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={loadNextPart} className={cls.articlesPage} dataTestId="ArticlesPage">
        <ArticlesPageFilters />
        <ArticleInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
