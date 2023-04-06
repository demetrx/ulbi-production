import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleBlockImageComponent.module.scss';

interface ArticleBlockImageComponentProps {
  className?: string;
}

export const ArticleBlockImageComponent = memo((props: ArticleBlockImageComponentProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articleBlockImageComponent, {}, [className])}>
      Article Image Block
    </div>
  );
});
