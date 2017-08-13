import {Time} from '../src/js/Time.js';
test('check for Time single hour and double minutes', () => {
  let time = new Time('1:20');
  let out = time.output();
  expect(out).toBe('one:twenty');
});
test('check for Time 2 digit hours and 2 digit minutes', () => {
  let time = new Time('20:20');
  let out = time.output();
  expect(out).toBe('twenty:twenty');
});
