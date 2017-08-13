import {Cardinal} from './Cardinal.js';
import {SpecialMiddle} from './Special_middle.js';
import {SuffixPrefix} from './Suffix_prefix.js';
export class Decider {
  constructor (out) {
    this.input = out;
    // console.log(this.input);
  }
  decide () {
    let dig = /^\d+$/;
    let mid = /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$|^\d{1,2}[:]\d{2}$|^\d+[/.]\d+$|^0\d{10}$|^[+]\d{2}[-| ]\d{10}/;
    // let sufpref = /^[A-Za-z]*\d+[A-Za-z]*/;
    let suf = /^[@#`~$%^&*()_\-+={}\\|:;"'?.>,<A-Za-z]*\d+$/;
    let pref = /^\d+[@#`~$%^&*()_\-+={}\\|:;"'?.>,<A-Za-z]*/;
    // console.log(mid.test(this.input[i].word));
    if (dig.test(this.input.word)) {
      let cardinalOb = new Cardinal(this.input);
      let out = cardinalOb.output();
      return out;
    } else if (mid.test(this.input.word)) {
      console.log(this.input);
      let special = new SpecialMiddle(this.input);
      let out = special.whichSpecialMiddle();
      // console.log(out);
      return out;
    } else if (suf.test(this.input.word) || pref.test(this.input.word)) {
      let sufprefOb = new SuffixPrefix(this.input);
      let out = sufprefOb.output();
      // console.log(this.input);
      return out;
    } else {
      return this.input;
    }
  }
}
