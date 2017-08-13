import {Date} from './Date.js';
import {Time} from './Time.js';
import {DecFrac} from './Dec_frac.js';
import {Phone} from './Phone.js';
export class SpecialMiddle {
  constructor (input) {
    this.input = input;
  }
  whichSpecialMiddle () {
    let date = /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$/g;
    let time = /^\d{1,2}[:]\d{2}$/;
    let decfrac = /^\d+[/.]\d+$/;
    let phone = /^0\d{10}$|^[+]\d{2}[-]\d{10}/;
    if (date.test(this.input)) {
      let dateOb = new Date(this.input);
      let out = dateOb.output();
      return out;
    } else if (time.test(this.input)) {
      let timeOb = new Time(this.input);
      let out = timeOb.output();
      return out;
    } else if (decfrac.test(this.input)) {
      let decfracOb = new DecFrac(this.input);
      let out = decfracOb.output();
      // console.log(out);
      return out;
    } else if (phone.test(this.input)) {
      let phone = new Phone(this.input);
      let out = phone.output();
      return out;
    } else {
      return this.input;
    }
  }
}
