import {SuffixPrefix} from '../src/js/Suffix_prefix.js';
test('check for suffix', () => {
  let suf = new SuffixPrefix('@ab12');
  let out = suf.output();
  expect(out).toBe('@abtwelve');
});
test('check for prefix', () => {
  let pref = new SuffixPrefix('3rd');
  let out = pref.output();
  expect(out).toBe('third');
});
