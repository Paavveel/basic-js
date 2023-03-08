const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || !this.chain[position - 1]) {
      this.chain.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const temp = [...this.chain];
    this.chain.length = 0;
    return temp.join('~~');
  },
};

module.exports = {
  chainMaker,
};
