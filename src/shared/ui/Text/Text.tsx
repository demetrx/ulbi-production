import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  Primary = 'primary',
  Error = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
  const {
    className, text, title, theme = TextTheme.Primary,
  } = props;

  return (
    <div className={classNames('text', {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.description}>{text}</p>}
    </div>
  );
});
