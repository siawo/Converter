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
    let phone = /^0\d{10}$|^[+]\d{2}[-| ]\d{10}/;
    if (date.test(this.input.word)) {
      let dateOb = new Date(this.input);
      dateOb.output();
    } else if (time.test(this.input.word)) {
      let timeOb = new Time(this.input);
      timeOb.output();
    } else if (decfrac.test(this.input.word)) {
      let decfracOb = new DecFrac(this.input);
      decfracOb.output();
    } else if (phone.test(this.input.word)) {
      let phone = new Phone(this.input);
      phone.output();
    }
  }
}
