const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.addition = options.addition === null?'null':options.addition;
  str = String(str);
  let answer = [];
  let separator = [];

  if (String(options.addition))
    for (let i = 0; i < (options.additionRepeatTimes ? +options.additionRepeatTimes : 1); i++) {
      separator.push(options.addition);
    }

  for (let i = 0; i < (options.repeatTimes ? +options.repeatTimes : 1); i++) {
    answer.push(`${str}${separator.join(options.additionSeparator ? options.additionSeparator : '|')}`);
  }

  return (answer.join(`${options.separator ? options.separator : '+'}`))
}

module.exports = {
  repeater
};
