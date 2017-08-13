import {Decider} from './Decider.js';
class Identifier {
  constructor (input) {
    this.input = input;
    this.text = [];
  }
  send () {
    this.text = this.input.split(/\s+/g);
    // console.log(text);
    let regexp = /\d+/;
    let dec, out;
    // let that = this;
    for (let i = 0; i < this.text.length; i++) {
      if (regexp.test(this.text[i])) {
        // console.log(text[i]);
        setTimeout(function (that) {
          dec = new Decider({ word: that.text[i], index: i, obj: that });
          out = dec.decide();
          that.text[out.index] = out.word;
          // console.log(that.text);
        }, 0, this);
      }
      // if (i === this.text.length - 1) {
        // this.output();
      }
    }
  }
  output () {
    document.getElementById('output').innerHTML = this.text.join(' ');
  }
}
let checker = () => {
  let input = document.getElementById('input').value;
  let i = new Identifier(input);
  i.send();
};
document.getElementById('b1').addEventListener('click', checker);
