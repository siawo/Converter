import {Num2Words} from './Num2Words.js';
/**
 * This class converts phone number from number to words
 * @constructor
 * @param {string} input phone numner staring with zero followed by {10 digit} or +{code}-{10 digit number} 
 */
export class Phone {
  constructor (input) {
    this.input = input;
  }
  output () {
    let word = '';
    for (let i = 0; i < this.input.length; i++) {
      if (!isNaN(parseInt(this.input[i]))) {
        let num = new Num2Words(this.input[i]);
        word += num.find() + ' ';
      } else {
        word += this.input[i] + ' ';
      }
    }
    // console.log(word.trim());
    this.input = word.trim();
    return this.input;
  }
}
