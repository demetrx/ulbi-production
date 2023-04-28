import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types/sort';
import { ArticleSortField } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number
  limit: number
  hasMore: boolean

  // filters
  view: ArticleView
  order: SortOrder
  sortField: ArticleSortField
  search: string;

  _initialized: boolean
}
