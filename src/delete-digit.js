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
  for (let i = 0; i < String(n).length; i++) {
    let temp = +(String(n).slice(0, i) + String(n).slice(i + 1, String(n).length));
    max = max < temp ? temp : max;
  }
  return max;
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
