import {Num2Words} from './Num2Words.js';
export class Cardinal {
  constructor (input) {
    this.input = input;
  }
  output () {
    let num = new Num2Words(this.input.word);
    this.input.word = num.find();
    // console.log(this.input.word);
    return this.input;
  }
}
