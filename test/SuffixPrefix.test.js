import {SuffixPrefix} from '../src/js/Suffix_prefix.js';
test('adds 1 + 2 to equal 3', () => {
  let suf = new SuffixPrefix({ word: '@ab12' });
  let out = suf.output();
  expect(out.word).toBe('@abtwelve');
});
test('adds 1 + 2 to equal 3', () => {
  let pref = new SuffixPrefix({ word: '3rd' });
  let out = pref.output();
  expect(out.word).toBe('third');
});