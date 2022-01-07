const data = require('../data/zoo_data');

const { species } = data;

function criaObjeto(array) {
  const objeto = {};
  for (let i = 0; i < array.length; i += 1) {
    const [item1, item2] = array[i];
    objeto[item1] = item2;
  }
  return objeto;
}

function countAnimals({ specie: animal, sex: genero } = {}) {
  if (animal === undefined) {
    const listOfAmount = species.map(({ name, residents }) => [name, residents.length]);
    return criaObjeto(listOfAmount);
  }
  if (genero === undefined) {
    const animalAqui = species.find(({ name }) => name === animal);
    return animalAqui.residents.length;
  }
  const animalWithSex = species.find(({ name }) => name === animal);
  return animalWithSex.residents.filter(({ sex }) => sex === genero).length;
}

module.exports = countAnimals;

countAnimals({ specie: 'bears', sex: 'female' });
