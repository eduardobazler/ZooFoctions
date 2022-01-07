const data = require('../data/zoo_data');

function countEntrants(entrants = []) {
  if (entrants !== undefined) {
    try {
      const numberChild = entrants.filter(({ age }) => age < 18).length;
      const numberAdult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
      const numberSenior = entrants.filter(({ age }) => age >= 50).length;
      return { child: numberChild, adult: numberAdult, senior: numberSenior };
    } catch (err) {
      return { child: 0, adult: 0, senior: 0 };
    }
  }
  return { child: 0, adult: 0, senior: 0 };
}

const priceChild = 20.99;
const priceAdult = 49.99;
const priceSenior = 24.99;

function calculateEntry(entrants) {
  const { child, adult, senior } = countEntrants(entrants);
  const conta = (child * priceChild) + (adult * priceAdult) + (senior * priceSenior);
  return conta;
}

module.exports = { calculateEntry, countEntrants };
