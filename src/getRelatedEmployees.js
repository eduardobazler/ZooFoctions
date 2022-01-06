const data = require('../data/zoo_data');

const { employees } = data;

function isManager(idParameter) {
  return employees.some(({ managers }) => managers.includes(idParameter));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const reletadeEmployees = employees.filter(({ managers }) => managers.includes(managerId));
    return reletadeEmployees.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
