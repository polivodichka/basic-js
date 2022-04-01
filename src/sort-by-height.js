const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  new_arr = Array.from(arr).sort((a, b) => a - b);

  for (let i = 0; i < new_arr.length; i++) {
    if (new_arr[i] < 0) {
      new_arr.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      new_arr.splice(i, 0, arr[i]);
    }
  }
  return new_arr;
}

module.exports = {
  sortByHeight
};