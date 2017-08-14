import {SuffixPrefix} from '../src/js/Suffix_prefix.js';
test('check for suffix', () => {
  let pref = new SuffixPrefix('@ab12');
  let out = pref.output();
  expect(out).toBe('@ab twelve');
});
test('check for prefix', () => {
  let suf = new SuffixPrefix('3rd');
  let out = suf.output();
  expect(out).toBe('third');
});
