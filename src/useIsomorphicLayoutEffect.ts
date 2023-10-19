import { useEffect, useLayoutEffect } from 'react';

/**
 * Use `useEffect` during SSR and `useLayoutEffect` in the browser to avoid warnings.
 */
const useIsomorphicLayoutEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
