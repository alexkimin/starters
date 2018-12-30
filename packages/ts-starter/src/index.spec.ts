// @ts-ignore: for example
import index from './index';

describe('example', () => {
  test('example ', () => {
    const test = { name: 'alex' };
    expect({ ...test }).toEqual(test);
    expect(true).toBe(true);
  });
});
