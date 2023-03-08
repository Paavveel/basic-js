const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  let isDiscardNext = false;

  for (let i = 0; i < arr.length; i++) {
    const isDiscard = arr[i - 2] && arr[i - 2] === '--discard-next';

    switch (arr[i]) {
      case '--discard-next':
        isDiscardNext = true;
        break;

      case '--discard-prev':
        if (isDiscard) {
          continue;
        } else if (arr[i - 1]) {
          result.pop();
        }
        break;

      case '--double-next':
        if (arr[i + 1]) {
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (isDiscard) {
          continue;
        } else if (arr[i - 1]) {
          result.push(arr[i - 1]);
        }
        break;

      default:
        if (isDiscardNext) {
          isDiscardNext = false;
        } else {
          result.push(arr[i]);
        }
        break;
    }
  }

  return result;
}

console.log(
  transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])
);
// console.log(transform([1, 2, 3, '--double-next', 4, 5]));
// console.log(transform([1, 2, 3, '--double-prev', 4, 5]));
// console.log(transform(['--discard-next', 2, 3, 4, 5]));
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]));

module.exports = {
  transform,
};
