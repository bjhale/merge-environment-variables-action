import { stringify } from 'ini';
import mergeVariables from './mergeVariables';

test('defaults only', () => {
  const a = 'A=1';
  const result = mergeVariables(a);
  expect(result).toBe("A=1\n");
})

test('simple override', () => {
  const a = 'A=1';
  const b = 'B=2';
  const result = mergeVariables(a,b);
  expect(result).toBe("A=1\nB=2\n");
});

test('dynamic from env', () => {
  process.env.C = 3;
  const a = 'A=1';
  const b = 'B=$C';
  const result = mergeVariables(a,'',b);
  expect(result).toBe("A=1\nB=3\n");
})

test('dynamic from default', () => {
  const a = 'A=1';
  const b = 'B=2';
  const c = 'C=$A';
  const result = mergeVariables(a,b,c);
  expect(result).toBe("A=1\nB=2\nC=1\n");
});