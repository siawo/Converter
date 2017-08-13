import {Date} from '../src/js/Date.js';
test('check for date with /', () => {
  let date = new Date('12/12/12');
  let out = date.output();
  expect(out).toBe('twelve/twelve/twelve');
});
test('check for date with -', () => {
  let date = new Date('12-12-1995');
  let out = date.output();
  expect(out).toBe('twelve-twelve-one thousand nine hundred and ninety five');
});
