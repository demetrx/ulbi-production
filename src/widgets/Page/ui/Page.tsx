import {
  MutableRefObject, ReactNode, UIEvent, useLayoutEffect, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch, useThrottle } from '@/shared/lib/hooks';
import { getUIScrollByPath, UIActions } from '@/features/UI';
import { StateSchema } from '@/app/providers/store';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';

interface PageProps extends TestProps{
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const {
    className, children, onScrollEnd, dataTestId,
  } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  useLayoutEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;

    // eslint-disable-next-line
  }, []);

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(UIActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop,
    }));
  }, 500);

  return (
    <main
      data-testid={dataTestId || 'page'}
      onScroll={handleScroll}
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} />}
    </main>
  );
};
