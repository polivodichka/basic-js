const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let resobj = {};
  
  for(let i = 0; i<domains.length; i++){
    let temp = '';
    let temp_arr = domains[i].split('.');
    for(let j = temp_arr.length - 1; j>=0; j--){
      temp += '.' + temp_arr[j];
      resobj[temp]= typeof resobj[temp] === 'number'? resobj[temp]+1:1;
    }
  }
  return resobj;
}

module.exports = {
  getDNSStats
};
