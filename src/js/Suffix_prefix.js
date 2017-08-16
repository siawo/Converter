import { Num2Words } from './Num2Words.js';
/**
 * This class decides converts a number with suffix or prefix. It also converts number ordinal to word ordinal
 * @constructor
 * @param {string} input any sinlge string word having a prefix or suffix 
 */
export class SuffixPrefix {
  constructor (word) {
    this.input = word;
  }
  output () {
    var numpart = this.input.match(/\d+/g);
    // console.log(numpart);
    var restpart = this.input.split(/\d+/);
    // console.log(restpart);
    let space = ' ';
    if (/\d+[s][t][.]*$|\d+[n][d][.]*$|\d+[r][d][.]*$|\d+[r][d][.]*$/.test(this.input)) {
      space = '';
    }
    let num;
    let numcontain = [];
    let word = '';
    for (let i = 0; i < numpart.length; i++) {
      num = new Num2Words(numpart[i]);
      numcontain.push(num.find());
    }
    for (let i = 0; i < restpart.length; i++) {
      if (numcontain[i] !== undefined) {
        word += restpart[i] + space + numcontain[i] + space;
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
