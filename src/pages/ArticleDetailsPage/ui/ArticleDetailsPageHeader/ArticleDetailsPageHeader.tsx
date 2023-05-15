import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui';
import { RoutePath } from '@/app/providers/router/config/routeConfig';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();

  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const handleBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const handleEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack
      max
      justify="between"
      className={classNames('', {}, [className])}
    >
      <Button onClick={handleBackToList}>{t('Back to list')}</Button>
      {canEdit && (
        <Button onClick={handleEditArticle}>{t('Edit')}</Button>
      )}
    </HStack>
  );
});
