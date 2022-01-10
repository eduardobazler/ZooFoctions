const data = require('../data/zoo_data');

const { employees, species } = data;

// criar função que recebe uma lista de ids dos animais e retornma uma lista como nome refertente à esses ID
function getNamesForIdAnimals(array) {
  const listOfReturn = [];
  for (let i = 0; i < array.length; i += 1) {
    const { name } = species.find(({ id }) => id === array[i]);
    listOfReturn.push(name);
  }
  return listOfReturn;
}

function getLocationsAnimals(array) {
  const listOfReturn = [];
  for (let i = 0; i < array.length; i += 1) {
    const { location } = species.find(({ id }) => id === array[i]);
    listOfReturn.push(location);
  }
  return listOfReturn;
}

function getAllEmployees() {
  const listOfEmployees = [];
  for (let i = 0; i < employees.length; i += 1) {
    const current = employees[i];
    const objectEmploye = {
      id: current.id,
      fullName: `${current.firstName} ${current.lastName}`,
    };
    objectEmploye.species = getNamesForIdAnimals(current.responsibleFor);
    objectEmploye.locations = getLocationsAnimals(current.responsibleFor);
    listOfEmployees.push(objectEmploye);
  }
  return listOfEmployees;
}

function verificacao(nome, idAqui) {
  const listOfEmployees = getAllEmployees();
  if (listOfEmployees.some(({ fullName }) => fullName.includes(nome))) {
    return listOfEmployees.find(({ fullName }) => fullName.includes(nome));
  }
  if (listOfEmployees.some(({ id }) => id === idAqui)) {
    return listOfEmployees.find(({ id }) => id === idAqui);
  }
  return false;
}

const defaultParameter = {
  name: '',
  id: '0',
};

function getEmployeesCoverage({ name: nameParameter, id } = defaultParameter) {
  const listOfEmployees = getAllEmployees();
  if (nameParameter === '') {
    return listOfEmployees;
  }
  const retorno = verificacao(nameParameter, id);

  if (!retorno) {
    throw new Error('Informações inválidas');
  }
  return retorno;
}

module.exports = getEmployeesCoverage;
