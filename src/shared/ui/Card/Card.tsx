import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode
  theme?: CardTheme
  max?: boolean
}

export const Card = (props: CardProps) => {
  const {
    className, children, max, theme = CardTheme.NORMAL, ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      className={classNames(cls.card, { [cls.max]: max }, [className, cls[theme]])}
    >
      {children}
    </div>
  );
};
