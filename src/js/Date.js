import {Num2Words} from './Num2Words.js';
export class Date {
  constructor (input) {
    this.input = input;
    this.out = [];
  }
  output () {
    // console.log(this.input.word);
    let inp = this.input.word.split(/[/]|[-]/);
    for (let i = 0; i < inp.length; i++) {
      let num = new Num2Words(inp[i]);
      this.out.push(num.find());
    }
    if (this.input.word.indexOf('/') >= 0) {
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
    this.input.word = word;
  }
}
module.exports = Date;
