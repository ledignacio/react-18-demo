const preSelectedField = `
const selectedField = useSyncExternalStore(
  store.subscribe,
  () => store.getSnapshot().selectedField,
);
`.trim();

const preUseWindowInnerWidth = `
function useWindowInnerWidth(serverFallback) {
  const getServerSnapshot = () => serverFallback;

  const [getSnapshot, subscribe] = useMemo(() => {
    return [
      () => window.innerWidth,
      (notify) => {
        window.addEventListener('resize', notify);
        return () => {
          window.removeEventListener('resize', notify);
        };
      }
    ];
  }, []);

  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
}
`.trim();

const preUseMediaQuery = `
function useMediaQuery(query, serverFallback) {
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
    getSnapshot,
    getServerSnapshot
  );
}
`.trim();

export { preSelectedField, preUseWindowInnerWidth, preUseMediaQuery };
