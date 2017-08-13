import {DecFrac} from '../src/js/Dec_frac.js';
test('check for decimal', () => {
  let dec = new DecFrac('12.12');
  let out = dec.output();
  expect(out).toBe('twelve point one two');
});
test('check for fractions', () => {
  let frac = new DecFrac('12/12');
  let out = frac.output();
  expect(out).toBe('twelve by twelve');
});
