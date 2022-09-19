import faker from '@faker-js/faker';

const getNames = (quantity) => Array.from(Array(quantity), () => (faker.name.findName()));

const names = getNames(5000);

export { getNames, names };
