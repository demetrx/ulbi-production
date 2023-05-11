import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
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
  S = 'size-s',
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
  'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text, title,
    'data-testid': dataTestId,
    theme = TextTheme.Primary,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames('text', {}, [className, cls[theme], cls[align], cls[size]])}>
      {title
        && (
        <HeaderTag
          className={cls.title}
          data-testid={`${dataTestId}.Title`}
        >
          {title}
        </HeaderTag>
        )}
      {text && (
      <p
        className={cls.description}
        data-testid={`${dataTestId}.Text`}
      >
        {text}
      </p>
      )}
    </div>
  );
});
