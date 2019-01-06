import { createAsyncAction, asyncDispatcher } from '../redux';

describe('redux.ts suites', () => {
  describe('createAsyncAction', () => {
    test('should have success, failure, pending case', () => {
      const action = createAsyncAction('TEST');
      expect(action.getType()).toBe('TEST');
      expect(action.success.getType()).toBe('TEST_SUCCESS');
      expect(action.failure.getType()).toBe('TEST_FAILURE');
      expect(action.pending.getType()).toBe('TEST_PENDING');
    });
  });
  describe('asyncDispatcher', () => {
    test('should call dispatch when promise resolved', async () => {
      const success = jest.fn();
      await asyncDispatcher(p => Promise.resolve(p))(
        createAsyncAction('TEST1'),
      )(1)({ dispatch: success } as any);
      expect(success).toBeCalled();
    });
    test('should call dispatch when promise rejected', async () => {
      const failure = jest.fn();
      await asyncDispatcher(p => Promise.reject(p))(createAsyncAction('TEST2'))(
        1,
      )({ dispatch: failure } as any);
      expect(failure).toBeCalled();
    });
  });
});
