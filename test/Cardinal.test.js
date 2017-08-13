import {Cardinal} from '../src/js/Cardinal.js';
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal('12345');
  let out = card.output();
  expect(out).toBe('twelve thousand three hundred and forty five');
});
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal('0');
  let out = card.output();
  expect(out).toBe('zero');
});
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal('1234567890123456789012345678901234567890123456789');
  let out = card.output();
  expect(out).toBe('Out of Limit');
});
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal('116');
  let out = card.output();
  expect(out).toBe('one hundred and sixteen');
});
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal('10000021');
  let out = card.output();
  expect(out).toBe('ten million twenty one');
});
