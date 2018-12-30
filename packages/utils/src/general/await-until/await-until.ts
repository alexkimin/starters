export function until<T, E = Error>(
  promise: Promise<T>,
): Promise<[E | null, T | undefined]> {
  return promise
    .then<[undefined, T]>((data: T) => [undefined, data])
    .catch<[E, undefined]>((err: E) => [err, undefined]);
}
