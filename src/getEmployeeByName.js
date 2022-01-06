const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName = '') {
  if (employeeName !== '') {
    const employee = employees.find((employeeCurrent) => employeeCurrent.firstName === employeeName
    || employeeCurrent.lastName === employeeName);

    return employee;
  }

  return {};
}

module.exports = getEmployeeByName;

getEmployeeByName();
