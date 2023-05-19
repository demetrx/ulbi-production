import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImg, Icon, Skeleton } from '@/shared/ui';
import UserIcon from '@/shared/assets/icons/user-filled.svg';

interface AvatarProps {
  className?: string;
  src?: string
  size?: number
  alt?: string
  fallbackInverted?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className, src, alt, fallbackInverted, size = 100,
  } = props;

  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  if (!src) {
    return null;
  }

  return (
    <AppImg
      errorFallback={<Icon width={size} height={size} Svg={UserIcon} inverted={fallbackInverted} />}
      fallback={<Skeleton width={size} height={size} border="50%" />}
      src={src}
      alt={alt}
      style={style}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
});
