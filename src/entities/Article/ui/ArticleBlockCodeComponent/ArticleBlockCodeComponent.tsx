import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleBlockCodeComponent.module.scss';

interface ArticleBlockCodeComponentProps {
  className?: string;
}

export const ArticleBlockCodeComponent = memo((props: ArticleBlockCodeComponentProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articleBlockCodeComponent, {}, [className])}>
      Article Code Block
    </div>
  );
});
