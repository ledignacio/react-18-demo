const preDeferredValue = `
const [query, setQuery] = useState('');
const deferredQuery = useDeferredValue(query);

const handleChange = (e) => {
  setQuery(e.target.value);
};
`.trim();

export { preDeferredValue };
