const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const arr = String(n).split('').map(Number);

  for (let i = 0; i < arr.length; i++) {
    const copy = [...arr];
    copy.splice(i, 1);

    const newN = Number(copy.join(''));

    max = Math.max(max, newN);
  }

  return max;
}

module.exports = {
  deleteDigit,
};
