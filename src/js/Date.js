import {Num2Words} from './Num2Words.js';
/**
 * This class converts date in numbers to words
 * @constructor
 * @param {string} input only numbers
 */
export class Date {
  constructor (input) {
    this.input = input;
    this.out = [];
  }
  output () {
    // console.log(this.input);
    let inp = this.input.split(/[/]|[-]/);
    for (let i = 0; i < inp.length; i++) {
      let num = new Num2Words(inp[i]);
      this.out.push(num.find());
    }
    if (this.input.indexOf('/') >= 0) {
      this.create('/');
      return this.input;
    } else {
      this.create('-');
      return this.input;
    }
  }
  create (deli) {
    var word = '';
    word = this.out[0] + deli + this.out[1] + deli + this.out[2];
    // console.log(word);
    this.input = word;
  }
}
