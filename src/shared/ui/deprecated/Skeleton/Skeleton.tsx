import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number
  width?: string | number
  border?: string
}
/**
 * Use new components from "redesigned" folder
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className, height, width, border,
  } = props;

  const styles: CSSProperties = useMemo(() => ({
    width,
    height,
    borderRadius: border,
  }), [width, height, border]);

  return (
    <div
      style={styles}
      className={classNames(cls.skeleton, {}, [className])}
    >

    </div>
  );
});
