import {Decider} from './Decider.js';
/**
 * This class identifies the words containig a numberic character and send it to decide
 * @constructor
 * @param {string} input a string with any no of words
 */
class Identifier {
  constructor (input) {
    this.input = input;
    this.text = [];
    this.c1 = 0;
    this.c2 = 0;
  }
  send () {
    this.text = this.input.split(/\s+/g);
    // console.log(text);
    let regexp = /\d+/;
    let dec, out;
    // let that = this;
    // this.c1 = 0;
    // this.c2 = 0;
    for (let i = 0; i < this.text.length; i++) {
      if (regexp.test(this.text[i])) {
        this.c1++;
        // console.log(text[i]);
        setTimeout(function (that) {
          let j = i;
          that.c2++;
          dec = new Decider(that.text[i]);
          out = dec.decide();
          // console.log(out);
          that.text[j] = out;
          // console.log(that.text);
          if (that.c1 === that.c2) {
            that.output();
          }
        }, 0, this);
      }
    }
    if (this.c1 === 0) {
      this.output();
    }
  }

  output () {
    document.getElementById('output').innerHTML += this.text.join(' ');
  }
}
let checker = () => {
  let input = document.getElementById('input').value;
  document.getElementById('output').innerHTML = '';
  let i = new Identifier(input);
  i.send();
};
document.getElementById('b1').addEventListener('click', checker);
