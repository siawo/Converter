import {Num2Words} from './Num2Words.js';
export class DecFrac {
  constructor (input) {
    this.input = input;
  }
  output () {
    if (this.input.indexOf('.') >= 0) {
      // console.log(this.input.indexOf('.'));
      // console.log(this.input);
      this.decimal();
      return this.input;
    } else {
      this.fraction();
      return this.input;
    }
  }
  decimal () {
    let inp = this.input.split('.');
    let num = new Num2Words(inp[0]);
    let int = '';
    int = num.find();
    let deci = inp[1];
    let word = '';
    for (let i = 0; i < inp[1].length; i++) {
      let num1 = new Num2Words(deci[i]);
      word += num1.find() + ' ';
    }
    word = int + ' point ' + word.trim();
    // console.log(word);
    this.input = word;
    // console.log(this.input);
  }
  fraction () {
    let inp = this.input.split('/');
    let num = new Num2Words(inp[0]);
    let word = '';
    word = num.find();
    let num1 = new Num2Words(inp[1]);
    word += ' by ' + num1.find();
    // console.log(word);
    this.input = word;
  }
}
