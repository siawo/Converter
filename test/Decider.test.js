import {Decider} from '../src/js/Decider.js';
test('check for special middle', () => {
  let time = new Decider('1:40');
  let out = time.decide();
  expect(out).toBe('one:forty');
});
test('check for cardinal', () => {
  let cardinal = new Decider('120');
  let out = cardinal.decide();
  expect(out).toBe('one hundred and twenty');
});
test('check for prefix suffix', () => {
  let pref = new Decider('23rd');
  let out = pref.decide();
  expect(out).toBe('twenty third');
});
test('check for no option', () => {
  let pref = new Decider('a2a');
  let out = pref.decide();
  expect(out).toBe('a2a');
});
