const { NotImplementedError } = require('../extensions/index.js');

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
function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const result = Array.from({ length: numRows }, () => Array(numCols).fill(0));

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let count = 0;
      
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          if (di === 0 && dj === 0) continue;
          
          const newRow = i + di;
          const newCol = j + dj;
          
          if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
            if (matrix[newRow][newCol] === true) {
              count++;
            }
          }
        }
      }
      
      result[i][j] = count;
    }
  }
  
  return result;
}

module.exports = {
  minesweeper
};
