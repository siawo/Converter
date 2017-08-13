import { Num2Words } from './Num2Words.js';
export class SuffixPrefix {
  constructor (word) {
    this.input = word;
  }
  output () {
    var numpart = this.input.word.match(/\d+/);
    var restpart = this.input.word.split(/\d+/);
    let num = new Num2Words(numpart[0]);
    let word = '';
    if (/^[@#`~$%^&*()_\-+={}\\|:;"'?.>,<A-Za-z]*\d+$/.test(this.input.word)) {
      word = restpart[0] + num.find();
      // console.log(word);
      this.input.word = word.trim();
      return this.input;
    } else {
      word = num.find() + restpart[1];
      word = word.replace('threerd', 'third');
      word = word.replace('onest', 'first');
      word = word.replace('twond', 'second');
      word = word.replace('fiveth', 'fifth');
      word = word.replace('eightth', 'eighth');
      word = word.replace('nineth', 'ninth');
      // console.log(word);
      this.input.word = word.trim();
      return this.input;
    }
  }
}
