import {Num2Words} from './Num2Words.js';
export class DecFrac {
  constructor (input) {
    this.input = input;
  }
  output () {
    if (this.input.word.indexOf('.') >= 0) {
      console.log(this.input.word.indexOf('.'));
      this.decimal();
    } else {
      this.fraction();
    }
  }
  decimal () {
    let inp = this.input.word.split('.');
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
    console.log(word);
  }
  fraction () {
    let inp = this.input.word.split('/');
    let num = new Num2Words(inp[0]);
    let word = '';
    word = num.find();
    let num1 = new Num2Words(inp[1]);
    word += ' by ' + num1.find();
    console.log(word);
  }
}
