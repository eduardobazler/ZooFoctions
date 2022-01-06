const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const listRetorno = [];
  ids.forEach((idParameter) => {
    const listFilter = species.filter(({ id }) => id === idParameter);
    listRetorno.push(...listFilter);
  });
  return listRetorno;
}

module.exports = getSpeciesByIds;
