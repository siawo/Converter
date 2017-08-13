import { Num2Words } from './Num2Words.js';
export class SuffixPrefix {
  constructor (word) {
    this.input = word;
  }
  output () {
    var numpart = this.input.match(/\d+/g);
    // console.log(numpart);
    var restpart = this.input.split(/\d+/);
    // console.log(restpart);
    let num;
    let numcontain = [];
    let word = '';
    for (let i = 0; i < numpart.length; i++) {
      num = new Num2Words(numpart[i]);
      numcontain.push(num.find());
    }
    // if (/^[@#`~$%^&*()_\-+={}\\|:;"'?.>,<A-Za-z]*\d+$/.test(this.input)) {
    // word = restpart[0] + num.find();
    // console.log(word);
    // this.input = word.trim();
    // return this.input;
    // } else {

    // word = num.find() + restpart[1];
    for (let i = 0; i < restpart.length; i++) {
      if (numcontain[i] !== undefined) {
        word += restpart[i] + numcontain[i];
      } else {
        word += restpart[i];
      }
    }
    word = word.replace('threerd', 'third');
    word = word.replace('onest', 'first');
    word = word.replace('twond', 'second');
    word = word.replace('fiveth', 'fifth');
    word = word.replace('eightth', 'eighth');
    word = word.replace('nineth', 'ninth');
    // console.log(word);
    this.input = word.trim();
    return this.input;
  }
}
