const getRandomHexColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

const filterNames = (filterTerm, names) => {
  if (!filterTerm) {
    return names;
  }

  return names.filter((name) => name.toLowerCase().includes(filterTerm.toLowerCase()));
};

export { filterNames, getRandomHexColor };