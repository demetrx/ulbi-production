import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleBlockTextComponent.module.scss';

interface ArticleBlockTextComponentProps {
  className?: string;
}

export const ArticleBlockTextComponent = memo((props: ArticleBlockTextComponentProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articleBlockTextComponent, {}, [className])}>
      Article Text Block
    </div>
  );
});
