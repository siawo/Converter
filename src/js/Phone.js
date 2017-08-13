import {Num2Words} from './Num2Words.js';
export class Phone {
  constructor (input) {
    this.input = input;
  }
  output () {
    let word = '';
    for (let i = 0; i < this.input.word.length; i++) {
      if (!isNaN(parseInt(this.input.word[i]))) {
        let num = new Num2Words(this.input.word[i]);
        word += num.find() + ' ';
      } else {
        word += this.input.word[i] + ' ';
      }
    }
    // console.log(word.trim());
    this.input.word = word.trim();
    return this.input;
  }
}
