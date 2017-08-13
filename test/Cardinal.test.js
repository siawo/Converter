import {Cardinal} from '../src/js/Cardinal.js';
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal({ word: '12345' });
  let out = card.output();
  expect(out.word).toBe('twelve thousand three hundred and forty five');
});
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal({ word: '0' });
  let out = card.output();
  expect(out.word).toBe('zero');
});
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal({ word: '1234567890123456789012345678901234567890123456789' });
  let out = card.output();
  expect(out.word).toBe('Out of Limit');
});
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal({ word: '116' });
  let out = card.output();
  expect(out.word).toBe('one hundred and sixteen');
});
test('adds 1 + 2 to equal 3', () => {
  let card = new Cardinal({ word: '10000021' });
  let out = card.output();
  expect(out.word).toBe('ten million twenty one');
});
