const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct = true){
    this.directMachine = direct;
  }
  encrypt(message, key) {
    try {
      let koef = Math.ceil((message.length / key.length));
      key = (key.repeat(koef)).toLowerCase();
      message = message.toLowerCase();

      let startPosition = 'a'.charCodeAt(0);
      let alphabetLength = 26;

      let answer = [];
      let spaceCounter = 0;
      for (let i = 0; i < message.length; i++) {
        if (/\W| |[0-9]/.exec(message[i])) {
          answer.push(message[i]);
          spaceCounter++;
        } else {
          let currentCode = message.charCodeAt(i) - startPosition;
          let shif = key.charCodeAt(i - spaceCounter) - startPosition;
          answer.push(String.fromCharCode(startPosition + ((currentCode + shif) % alphabetLength)));
        }
      }
      return (this.directMachine)?answer.join('').toUpperCase():answer.reverse().join('').toUpperCase();

    } catch (error) {
      throw new Error("Incorrect arguments!");
    }
  }
  decrypt(message, key) {
    try {
      let koef = Math.ceil((message.length / key.length));
      key = (key.repeat(koef)).toLowerCase();
      message = message.toLowerCase();

      let startPosition = 'a'.charCodeAt(0);
      let alphabetLength = 26;

      let answer = [];
      let spaceCounter = 0;
      for (let i = 0; i < message.length; i++) {
        if (/\W| |[0-9]/.exec(message[i])) {
          answer.push(message[i]);
          spaceCounter++;
        } else {
          let currentCode = message.charCodeAt(i) - startPosition;
          let shif = key.charCodeAt(i - spaceCounter) - startPosition;
          answer.push(String.fromCharCode(startPosition + ((currentCode - shif + alphabetLength) % alphabetLength)));
        }
      }
      return (this.directMachine)?answer.join('').toUpperCase():answer.reverse().join('').toUpperCase();

    } catch (error) {
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
