const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  return (date.getMonth() >= 2 && date.getMonth() <= 4)?'spring':(date.getMonth() >= 5 && date.getMonth() <= 7)?'summer':(date.getMonth() >= 8 && date.getMonth() <= 10)?'autumn':'winter';
}

module.exports = {
  getSeason
};
