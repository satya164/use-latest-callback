import * as React from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

/**
 * React hook which returns the latest callback without changing the reference.
 */
export default function useLatestCallback<T extends Function>(callback: T): T {
  const ref = React.useRef<T>(callback);

  const latestCallback = React.useRef(function latestCallback(
    this: unknown,
    ...args: unknown[]
  ) {
    // eslint-disable-next-line babel/no-invalid-this
    return ref.current.apply(this, args);
  } as unknown as T).current;

  useIsomorphicLayoutEffect(() => {
    ref.current = callback;
  });

  return latestCallback;
}
