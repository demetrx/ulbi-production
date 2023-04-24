import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui';
import { ArticleBlockImage } from '../../model/types/article';
import cls from './ArticleBlockImageComponent.module.scss';

interface ArticleBlockImageComponentProps {
  className?: string;
  block: ArticleBlockImage
}

export const ArticleBlockImageComponent = memo((props: ArticleBlockImageComponentProps) => {
  const { className, block: { title, src } } = props;

  return (
    <div className={classNames(cls.articleBlockImageComponent, {}, [className])}>
      <img src={src} className={cls.img} alt={title} />
      {title && <Text text={title} align={TextAlign.CENTER} />}
    </div>
  );
});
