import React from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

/**
 * React hook which returns the latest callback without changing the reference.
 */
export default function useLatestCallback<
  T extends (this: unknown, ...args: unknown[]) => unknown
>(callback: T): T {
  const ref = React.useRef(callback);

  const latestCallback = React.useRef(function latestCallback(...args) {
    // eslint-disable-next-line babel/no-invalid-this
    return ref.current.apply(this, args);
  } as T).current;

  useIsomorphicLayoutEffect(() => {
    ref.current = callback;
  });

  return latestCallback;
}
