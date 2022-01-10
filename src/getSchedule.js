const data = require('../data/zoo_data');

const { species, hours } = data;

function officeHourReturn(dia) {
  let objetoDay = {
    officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
  };
  if (dia === 'Monday') {
    objetoDay = { officeHour: 'CLOSED' };
  }
  return objetoDay;
}

function exhibitionForDay(day) {
  if (day !== 'Monday') {
    const listAnimals = species.filter(({ availability }) => availability.includes(day));
    return listAnimals.map(({ name }) => name);
  }
  return 'The zoo will be closed!';
}

function showHoursOpen() {
  const objetoWeek = {};
  const listOfDays = Object.keys(hours);
  for (let i = 0; i < listOfDays.length; i += 1) {
    objetoWeek[listOfDays[i]] = officeHourReturn(listOfDays[i]);
    objetoWeek[listOfDays[i]].exhibition = exhibitionForDay(listOfDays[i]);
  }
  return objetoWeek;
}

const days = Object.keys(hours);
const lisOfAnimals = species.map(({ name }) => name);

function getSchedule(scheduleTarget = '') {
  if (scheduleTarget === '') {
    return showHoursOpen();
  }
  if (!days.includes(scheduleTarget) && !lisOfAnimals.includes(scheduleTarget)) {
    return showHoursOpen();
  }
  if (days.includes(scheduleTarget)) {
    const objectDay = {};
    objectDay[scheduleTarget] = showHoursOpen()[scheduleTarget];
    return objectDay;
  }
  const { availability } = species.find(({ name }) => name === scheduleTarget);
  return availability;
}

module.exports = getSchedule;
