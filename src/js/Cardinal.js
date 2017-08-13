import {Num2Words} from './Num2Words.js';
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
