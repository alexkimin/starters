import { until } from '../async';

describe('await until', () => {
  test('should return a value when promise resolved', async () => {
    const [err, data] = await until<{ data: number }>(
      Promise.resolve({ data: 1 }),
    );
    expect(err).toBeUndefined();
    expect(data).toEqual({ data: 1 });
  });
  test('should return an error when promise rejected', async () => {
    const [err, data] = await until<{ error: string }>(
      Promise.reject({ error: 'error here' }),
    );
    expect(err).toEqual({ error: 'error here' });
    expect(data).toBeUndefined();
  });
});
