import { useMemo, useSyncExternalStore } from 'react';

export default function useMediaQuery(query, serverFallback) {
  const getServerSnapshot = () => serverFallback;

  const [getSnapshot, subscribe] = useMemo(() => {
    const mediaQueryList = window.matchMedia(query);

    return [
      () => mediaQueryList.matches,
      (notify) => {
        mediaQueryList.addEventListener('change', notify);
        return () => {
          mediaQueryList.removeEventListener('change', notify);
        };
      }
    ];
  }, [query]);

  return useSyncExternalStore(
    subscribe,
    // Fallback to getServerSnapshot only required for React 17
    typeof window !== 'undefined' ? getSnapshot : getServerSnapshot,
    getServerSnapshot
  );
}
