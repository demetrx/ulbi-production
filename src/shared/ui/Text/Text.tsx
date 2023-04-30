import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  Primary = 'primary',
  INVERTED = 'inverted',
  Error = 'error',
}
export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size-m',
  L = 'size-l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className, text, title, theme = TextTheme.Primary, align = TextAlign.LEFT, size = TextSize.M,
  } = props;

  return (
    <div className={classNames('text', {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.description}>{text}</p>}
    </div>
  );
});
