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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let j = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      if (char >= 'A' && char <= 'Z') {
        const mCode = char.charCodeAt(0) - 65;
        const kCode = upperKey[j % upperKey.length].charCodeAt(0) - 65;
        const encryptedChar = String.fromCharCode(((mCode + kCode) % 26) + 65);
        result += encryptedChar;
        j++;
      } else {
        result += char;
      }
    }
    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let j = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      if (char >= 'A' && char <= 'Z') {
        const cCode = char.charCodeAt(0) - 65;
        const kCode = upperKey[j % upperKey.length].charCodeAt(0) - 65;
        const decryptedChar = String.fromCharCode(((cCode - kCode + 26) % 26) + 65);
        result += decryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
