import {Num2Words} from './Num2Words.js';
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
