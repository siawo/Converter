import {Cardinal} from '../src/js/Cardinal.js';
test('5 digit input', () => {
  let card = new Cardinal('12345');
  let out = card.output();
  expect(out).toBe('twelve thousand three hundred and forty five');
});
test('check for zero', () => {
  let card = new Cardinal('0');
  let out = card.output();
  expect(out).toBe('zero');
});
test('check for out of limit', () => {
  let card = new Cardinal('1234567890123456789012345678901234567890123456789');
  let out = card.output();
  expect(out).toBe('Out of Limit');
});
test('check for a three digit number', () => {
  let card = new Cardinal('116');
  let out = card.output();
  expect(out).toBe('one hundred and sixteen');
});
test('check for millions', () => {
  let card = new Cardinal('10000021');
  let out = card.output();
  expect(out).toBe('ten million twenty one');
});
