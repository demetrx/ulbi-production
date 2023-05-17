import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * Hook giving ability to cancel previous func call until a given delay expires
 * @param callback
 * @param delay - delay in ms
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
