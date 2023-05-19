import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Text, Icon, Card, Avatar, Button, AppLink, AppImg, Skeleton,
} from '@/shared/ui';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';
import {
  Article, ArticleBlockText, ArticleBlockType, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { getRouteArticleDetails } from '@/app/providers/router/config/routeConfig';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className, article, view, target,
  } = props;
  const { t } = useTranslation();

  const types = <Text text={article.category.join(', ')} className={cls.categories} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks
      .find((block) => block.type === ArticleBlockType.TEXT) as ArticleBlockText;

    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImg
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock && <ArticleBlockTextComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <AppLink to={getRouteArticleDetails(article.id)}>
              <Button>{t('Read more')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImg
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={String(article.title)} className={cls.title} />
      </Card>
    </AppLink>
  );
});
