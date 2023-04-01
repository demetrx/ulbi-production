import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string
  size?: number
  alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className, src, size = 100, alt,
  } = props;

  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  if (!src) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
});
