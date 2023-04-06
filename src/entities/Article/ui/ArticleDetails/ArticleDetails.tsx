import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReducersMap } from 'shared/lib/hocs';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleSlice';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersMap = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetails = (props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        title={t('Failed to load the article')}
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = (
      <div>Article Details</div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>

  );
};

const memoizedArticleDetails = memo(ArticleDetails);

export { memoizedArticleDetails as ArticleDetails };
