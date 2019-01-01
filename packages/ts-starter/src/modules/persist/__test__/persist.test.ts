import persist from '../persist';

describe('modules/persist', () => {
  const { actions, reducers, interceptor } = persist;
  let state: any;
  let clear: any;
  let removeItem: any;

  beforeEach(() => {
    clear = jest.spyOn(Storage.prototype, 'clear');
    removeItem = jest.spyOn(Storage.prototype, 'removeItem');
    state = {
      app: {},
    };
  });

  test('purgeStateAndSession should return undefined state and call .clear()', () => {
    const purgeStateAndSession =
      reducers[actions.purgeStateAndSession.toString()];
    const nextState = purgeStateAndSession(state);
    expect(nextState).toBe(undefined);
    expect(clear).toBeCalled();
  });

  test('purgeSessionStorage should return state and call .clear()', () => {
    const purgeSessionStorage =
      reducers[actions.purgeSessionStorage.toString()];
    const nextState = purgeSessionStorage(state);
    expect(nextState).toBe(state);
    expect(clear).toBeCalled();
  });

  test('purgeSessionStorage should return state and call .removeItem() with key', () => {
    const purgeSessionStorage =
      reducers[actions.purgeSessionStorage.toString()];
    const nextState = purgeSessionStorage(state, 'root');
    expect(nextState).toBe(state);
    expect(removeItem).toBeCalledWith('persist:root');
  });

  test('interceptor should return proper state based on action', () => {
    const expectedState1 = interceptor(state, {
      type: actions.purgeStateAndSession.toString(),
    });
    expect(expectedState1).toBe(undefined);
    const expectedState2 = interceptor(state, {
      type: actions.purgeSessionStorage.toString(),
    });
    expect(expectedState2).toBe(state);
    const expectedState3 = interceptor(state, { type: 'TEST' });
    expect(expectedState3).toBe(state);
  });
});
