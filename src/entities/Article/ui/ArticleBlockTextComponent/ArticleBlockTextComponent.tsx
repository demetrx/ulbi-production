import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleBlockText } from '../../model/types/article';
import cls from './ArticleBlockTextComponent.module.scss';

interface ArticleBlockTextComponentProps {
  className?: string;
  block: ArticleBlockText
}

export const ArticleBlockTextComponent = memo((props: ArticleBlockTextComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleBlockTextComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}
      {/* eslint-disable-next-line react/no-array-index-key */}
      {block.paragraphs.map((i, idx) => <Text key={idx} text={i} className={cls.paragraph} />)}
    </div>
  );
});
