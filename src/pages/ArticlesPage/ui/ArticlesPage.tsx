import React, { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import {
  DynamicModuleLoader,
  ReducersMap,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
// import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
// import { useTranslation } from 'react-i18next';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import {
  // getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articles';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import {
  fetchNextArticlesPage,
} from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

const reducers: ReducersMap = { articlesPage: articlesPageReducer };

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);
  // const error = useSelector(getArticlesPageError);
  // const { t } = useTranslation();

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const loadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={loadNextPart} className={cls.articlesPage}>
        <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
