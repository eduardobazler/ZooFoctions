const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, ageFunction) {
  const currentAnimal = species.find(({ name }) => name === animal);
  const { residents } = currentAnimal;
  return residents.every(({ age }) => age >= ageFunction);
}

module.exports = getAnimalsOlderThan;
