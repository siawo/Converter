import {Date} from '../src/js/Date.js';
test('adds 1 + 2 to equal 3', () => {
  let date = new Date('12/12/12');
  let out = date.output();
  expect(out).toBe('twelve/twelve/twelve');
});
test('adds 1 + 2 to equal 3', () => {
  let date = new Date('12-12-1995');
  let out = date.output();
  expect(out).toBe('twelve-twelve-one thousand nine hundred and ninety five');
});
