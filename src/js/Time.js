import {Num2Words} from './Num2Words.js';
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
    // console.log(word);
    this.input = word;
    return this.input;
  }
}
