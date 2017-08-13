import {SpecialMiddle} from '../src/js/Special_middle.js';
test('check for time', () => {
  let time = new SpecialMiddle('1:20');
  let out = time.whichSpecialMiddle();
  expect(out).toBe('one:twenty');
});
test('check for date with -', () => {
  let date = new SpecialMiddle('12-12-1995');
  let out = date.whichSpecialMiddle();
  expect(out).toBe('twelve-twelve-one thousand nine hundred and ninety five');
});
test('phone no with +91-', () => {
  let ph = new SpecialMiddle('+91-9038517648');
  let out = ph.whichSpecialMiddle();
  expect(out).toBe('+ nine one - nine zero three eight five one seven six four eight');
});
test('check for decimal', () => {
  let dec = new SpecialMiddle('12.12');
  let out = dec.whichSpecialMiddle();
  expect(out).toBe('twelve point one two');
});
test('check for fractions', () => {
  let frac = new SpecialMiddle('12/12');
  let out = frac.whichSpecialMiddle();
  expect(out).toBe('twelve by twelve');
});
test('check for none conditions', () => {
  let none = new SpecialMiddle('12');
  let out = none.whichSpecialMiddle();
  expect(out).toBe('12');
});
