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
  if (!Array.isArray(members) || !members.length) {
    return false;
  }

  let result = '';

  for (const m of members) {
    if (typeof m === 'string') {
      const firstChar = m.trim().charAt(0).toUpperCase();
      result += firstChar;
    }
  }

  return result.split('').sort().join('');
}

module.exports = {
  createDreamTeam,
};
