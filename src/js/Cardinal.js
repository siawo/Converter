import {Num2Words} from './Num2Words.js';
/**
 * This class converts numbers to words
 * @constructor
 * @param {string} input only numbers
 */
export class Cardinal {
  constructor (input) {
    this.input = input;
  }
  output () {
    let num = new Num2Words(this.input);
    this.input = num.find();
    // console.log(this.input);
    return this.input;
  }
}
