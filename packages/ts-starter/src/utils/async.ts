export const until = <T, E = Error>(
  promise: Promise<T>,
): Promise<[E | null, T | undefined]> =>
  promise
    .then<[undefined, T]>((res: T) => [undefined, res])
    .catch<[E, undefined]>((err: E) => [err, undefined]);
