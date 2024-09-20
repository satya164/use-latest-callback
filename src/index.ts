import { useRef } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

/**
 * React hook which returns the latest callback without changing the reference.
 */
function useLatestCallback<T extends (...args: A) => R, A extends unknown[], R>(callback: T): T {
  const ref = useRef<T>(callback);

  const latestCallback = useRef(function latestCallback(this: unknown, ...args: A): R {
    return ref.current.apply(this, args);
  } as unknown as T).current;

  useIsomorphicLayoutEffect(() => {
    ref.current = callback;
  });

  return latestCallback;
}

// Use export assignment to compile to module.exports =
export = useLatestCallback;
