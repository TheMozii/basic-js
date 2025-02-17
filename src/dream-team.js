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
  if (!Array.isArray(members)) return false;

  const initials = members
  .filter(member => typeof member === 'string')
  .map(member => member.trim())
  .filter(member => member.length > 0)
  .map(member => member[0].toUpperCase());

  if (initials.length === 0) return false;

  return initials.sort().join('');
}

module.exports = {
  createDreamTeam
};
