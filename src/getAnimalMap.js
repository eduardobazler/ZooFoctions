const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsAllLocation() {
  const animalsNE = species.filter(({ location }) => location === 'NE').map(({ name }) => name);
  const animalsNW = species.filter(({ location }) => location === 'NW').map(({ name }) => name);
  const animalsSE = species.filter(({ location }) => location === 'SE').map(({ name }) => name);
  const animalsSW = species.filter(({ location }) => location === 'SW').map(({ name }) => name);
  return { NE: animalsNE, NW: animalsNW, SE: animalsSE, SW: animalsSW };
}

function ordenaArray(array, sorted = false) {
  if (sorted) {
    return array.sort();
  }
  return array;
}

function getNameOfAnimal(array, soted = false, sexo = 'all') {
  const arrayReturn = [];
  for (let i = 0; i < array.length; i += 1) {
    const animalWithName = {};
    const { residents } = species.find(({ name }) => name === array[i]);
    let listOfNames = [];
    if (sexo === 'all') {
      listOfNames = residents.map(({ name }) => name);
    } else {
      listOfNames = residents.filter(({ sex }) => sex === sexo).map(({ name }) => name);
    }
    listOfNames = ordenaArray(listOfNames, soted);
    animalWithName[array[i]] = listOfNames;
    arrayReturn.push(animalWithName);
  }
  return arrayReturn;
}

const objectDefault = { includeNames: false, sex: 'all', sorted: false };

function getAnimalMap({ includeNames, sex, sorted } = objectDefault) {
  if (!includeNames) {
    return getAnimalsAllLocation();
  }
  if (includeNames) {
    const { NE, NW, SE, SW } = getAnimalsAllLocation();
    const objetoRetorno = {
      NE: getNameOfAnimal(NE, sorted, sex),
      NW: getNameOfAnimal(NW, sorted, sex),
      SE: getNameOfAnimal(SE, sorted, sex),
      SW: getNameOfAnimal(SW, sorted, sex),
    };
    return objetoRetorno;
  }
}

module.exports = getAnimalMap;
