import React from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const throwIfRender = () => {
  throw new Error(
    `The callback returned by 'useLatestCallback' should only be used in event listeners and not during render.`
  );
};

/**
 * React hook which returns the latest callback without changing the reference.
 */
export default function useLatestCallback<T extends Function>(callback: T): T {
  // @ts-expect-error
  const ref = React.useRef<T>(throwIfRender);

  const latestCallback = React.useRef(function latestCallback(
    this: unknown,
    ...args: unknown[]
  ) {
    // eslint-disable-next-line babel/no-invalid-this
    return ref.current.apply(this, args);
  } as unknown as T).current;

  // @ts-expect-error
  ref.current = throwIfRender;

  useIsomorphicLayoutEffect(() => {
    ref.current = callback;
  });

  return latestCallback;
}
