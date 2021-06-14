const React = require('react');

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

/**
 * React hook which returns the latest callback without changing the reference.
 *
 * @param {T extends (...args: any[]) => void} callback Callback to use as the latest callback
 * @return {T} Memoized callback which preserves the reference
 *
 * @template T
 */
function useLatestCallback(callback) {
  const ref = React.useRef(callback);

  const latestCallback = React.useRef(function latestCallback(...args) {
    // eslint-disable-next-line babel/no-invalid-this
    return ref.current.apply(this, args);
  }).current;

  useIsomorphicLayoutEffect(() => {
    ref.current = callback;
  });

  return latestCallback;
}

module.exports = useLatestCallback;
