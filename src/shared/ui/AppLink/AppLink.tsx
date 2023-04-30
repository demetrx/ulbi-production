import { HTMLAttributeAnchorTarget, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme
  children: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
