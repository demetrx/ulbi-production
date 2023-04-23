import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll(options: UseInfiniteScrollOptions) {
  const { wrapperRef, triggerRef, callback } = options;

  useEffect(() => {
    if (!callback) return () => undefined;
    const triggerEl = triggerRef.current;
    const wrapperEl = wrapperRef.current;

    const options = {
      root: wrapperEl,
      rootMargin: '0px 0px 100px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerEl);

    return () => {
      observer.unobserve(triggerEl);
    };
  }, [wrapperRef, triggerRef, callback]);
}
