const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {

      let sum = 0;

      let temp_i_min = i > 0 ? i - 1 : i;
      let temp_i_max = i < matrix.length - 1 ? i + 1 : i;
      let temp_j_min = j > 0 ? j - 1 : j;
      let temp_j_max = j < matrix[i].length - 1 ? j + 1 : j;


      for (let l = temp_i_min; l <= temp_i_max; l++) {
        for (let k = temp_j_min; k <= temp_j_max; k++) {
          sum += matrix[l][k] ? 1 : 0;
        }
      }
      if (matrix[i][j]) sum--;
      result[i][j] = sum;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};