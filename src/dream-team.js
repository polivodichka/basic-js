const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  return !Boolean(members) || typeof members != 'object' || !Boolean(members.map)?false:(members.map(el => typeof el != 'string'? delete el : el.toUpperCase().trim()).sort().map(el => typeof el === 'string'?el[0]:'').join(''));
}

module.exports = {
  createDreamTeam
};
