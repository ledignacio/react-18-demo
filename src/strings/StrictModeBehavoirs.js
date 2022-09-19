const prePrevStrictMode = `
· React monta el componente.
  · Layout effect son creados.
  · Effect son creados.
`.trim();

const preAfterStrictMode = `
· React monta el componente.
  · Layout effects son creados.
  · Effects son creados.

· React simula desmontar el componente.
  · Layout effects son destruidos.
  · Effects son destruidos.

· React simula montar el componente con el anterior state.
  · Layout effects son creados.
  · Effects son creados.
`.trim();

export { preAfterStrictMode, prePrevStrictMode };
