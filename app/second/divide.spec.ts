import {
  divide,
} from '../calculator'

test('divide function', () => {
  expect(divide(2.0, 0)).toBe('Cannot divide by 0');
});
