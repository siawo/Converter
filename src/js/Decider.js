import {Cardinal} from './Cardinal.js';
import {SpecialMiddle} from './Special_middle.js';
import {SuffixPrefix} from './Suffix_prefix.js';
/**
 * This class decides the type of input
 * @constructor
 * @param {string} input any sinlge string without any space 
 */
export class Decider {
  constructor (out) {
    this.input = out;
  }
  decide () {
    let dig = /^\d+$/;
    let mid = /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$|^\d{1,2}[:]\d{2}$|^\d+[/.]\d+$|^0\d{10}$|^[+]\d{2}[-| ]\d{10}/;
    let suf = /^[@#`~$%^&*()_\-+={}\\|:;"'?.>,<A-Za-z]*\d+$/;
    let pref = /^\d+[@#`~$%^&*()_\-+={}\\|:;"'?.>,<A-Za-z]*/;
    if (mid.test(this.input)) {
      let special = new SpecialMiddle(this.input);
      let out = special.whichSpecialMiddle();
      return out;
    } else if (dig.test(this.input)) {
      let cardinalOb = new Cardinal(this.input);
      let out = cardinalOb.output();
      return out;
    } else if (suf.test(this.input) || pref.test(this.input)) {
      let sufprefOb = new SuffixPrefix(this.input);
      let out = sufprefOb.output();
      return out;
    } else {
      return this.input;
    }
  }
}
