const preWithoutTransition = `
const handleChange = (e) => {
  setQuery(e.target.value);
  setHighlight(e.target.value);
};
`.trim();

const preWithTransition = `
const handleChange = (e) => {
  setQuery(e.target.value);
  startTransition(() => {
    setHighlight(e.target.value);
  });
};
`.trim();

export { preWithoutTransition, preWithTransition };
