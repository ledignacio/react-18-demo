const preUseEffects = `
useEffect(() => {
  insertNode();
}, [someDependency]);

useLayoutEffect(() => {
  insertNode();
}, [someDependency]);

useInsertionEffect(() => {
  insertNode();
}, [someDependency]);
`.trim();

export { preUseEffects };