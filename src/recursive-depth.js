const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1, big_depth = 0) {
    big_depth = big_depth < depth ? depth : big_depth;
    for (let i = 0; i<arr.length; i++){
      big_depth = big_depth < depth ? depth : big_depth;
      if (typeof(arr[i])==='object'){
        depth++;
        depth = this.calculateDepth(arr[i], depth);
        big_depth = big_depth < depth ? depth : big_depth;
        depth = 1;
      }  
    }
    return big_depth;
  }
}

module.exports = {
  DepthCalculator
};
