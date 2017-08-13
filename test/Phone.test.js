import {Phone} from '../src/js/Phone.js';
test('phone no with +91-', () => {
  let ph = new Phone('+91-9038517648');
  let out = ph.output();
  expect(out).toBe('+ nine one - nine zero three eight five one seven six four eight');
});
test('phone no start with 0', () => {
  let card = new Phone('09038517648');
  let out = card.output();
  expect(out).toBe('zero nine zero three eight five one seven six four eight');
});
