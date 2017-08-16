import {Num2Words} from './Num2Words.js';
/**
 * This class convrts time in number to words
 * @constructor
 * @param {string} input any sinlge string word having two digit number in front of colon and 2 digit after colon
 */
export class Time {
  constructor (input) {
    this.input = input;
    this.out = [];
  }
  output () {
    let inp = this.input.split(/[:]/);
    for (let i = 0; i < inp.length; i++) {
      let num = new Num2Words(inp[i]);
      this.out.push(num.find());
    }
    var word = '';
    word = this.out[0] + ':' + this.out[1];
    this.input = word;
    return this.input;
  }
}
