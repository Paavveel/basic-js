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
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const arrMessage = message.toUpperCase().split('');
    const length = message.split(' ').join('').length;
    key = key.padEnd(length, key).toUpperCase();

    let cipher = '';

    for (let i = 0; i < arrMessage.length; i++) {
      if (arrMessage[i] === ' ') {
        cipher += arrMessage[i];
        arrMessage.splice(i, 1);
      }

      if (
        arrMessage[i].charCodeAt() < 'A'.charCodeAt() ||
        arrMessage[i].charCodeAt() > 'Z'.charCodeAt()
      ) {
        cipher += arrMessage[i];
      } else {
        const code =
          ((arrMessage[i].charCodeAt() + key[i].charCodeAt()) % 26) + 65;

        cipher += String.fromCharCode(code);
      }
    }

    return this.mode ? cipher : cipher.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const arrMessage = encryptedMessage.toUpperCase().split('');
    const length = encryptedMessage.split(' ').join('').length;
    key = key.padEnd(length, key).toUpperCase();

    let cipher = '';

    for (let i = 0; i < arrMessage.length; i++) {
      if (arrMessage[i] === ' ') {
        cipher += arrMessage[i];
        arrMessage.splice(i, 1);
      }

      if (
        arrMessage[i].charCodeAt() < 'A'.charCodeAt() ||
        arrMessage[i].charCodeAt() > 'Z'.charCodeAt()
      ) {
        cipher += arrMessage[i];
      } else {
        const code =
          ((arrMessage[i].charCodeAt() + 26 - key[i].charCodeAt()) % 26) + 65;

        cipher += String.fromCharCode(code);
      }
    }

    return this.mode ? cipher : cipher.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
