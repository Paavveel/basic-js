const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_OF_TWO = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== 'string' ||
    Number.isNaN(parseFloat(sampleActivity))
  ) {
    return false;
  }

  const sampleNum = parseFloat(sampleActivity);

  if (sampleNum <= 0 || sampleNum > MODERN_ACTIVITY) {
    return false;
  }

  const A = MODERN_ACTIVITY / sampleNum;
  const k = LOG_OF_TWO / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(A) / k);
}

module.exports = {
  dateSample,
};
