const preBatching = `
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
}, 1000);
`.trim();

export { preBatching };
