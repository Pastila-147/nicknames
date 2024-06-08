import Validator from '../app';

test.each([
  ['Test', true],
  ['Te-st', true],
  ['Te_st', true],
  ['Tes333t', true],
  ['Tes9999t', false],
  ['4Test', false],
  ['Test8', false],
  ['_Test', false],
  ['Test_', false],
  ['-Test', false],
  ['Test-', false],
])('Terst user nickname', (nickname, expected) => {
  const result = new Validator(nickname).validateUsername();
  expect(result).toBe(expected);
});