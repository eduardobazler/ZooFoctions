/* const { animal } = require('faker'); */
const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldReduce(acc, curret) {
  if (curret.age > acc.age) {
    return curret;
  }
  return acc;
}

function getOldestFromFirstSpecies(idParameter) {
  const { responsibleFor: listOfIdAnimals } = employees.find(({ id }) => id === idParameter);
  const animalReturnId = listOfIdAnimals[0];
  const { residents } = species.find(({ id }) => id === animalReturnId);
  const { name, sex, age } = residents.reduce(getOldReduce);
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
