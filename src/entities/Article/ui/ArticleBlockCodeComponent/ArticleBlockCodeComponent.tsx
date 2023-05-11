import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui';
import { ArticleBlockCode } from '../../model/types/article';
import cls from './ArticleBlockCodeComponent.module.scss';

interface ArticleBlockCodeComponentProps {
  className?: string;
  block: ArticleBlockCode
}

export const ArticleBlockCodeComponent = memo((props: ArticleBlockCodeComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleBlockCodeComponent, {}, [className])}>
      <Code code={block.code} />
    </div>
  );
});
