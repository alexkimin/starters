// !notice: with createAsyncAction;
import { Middleware, Dispatch, AnyAction } from 'redux';

function createPromiseMiddleware(config: any): Middleware<any, any, Dispatch> {
  return ({ dispatch }) => next => (action: AnyAction) => {
    const { payload } = action;

    // normal actions
    if (!(payload instanceof Promise)) return next(action);

    // promise handling
    const promise = payload;
    dispatch(action.pending());
    return promise
      .then((res: Response) => dispatch(action.success(res)))
      .catch((err: any) => dispatch(action.failure(err)));
  };
}

export default createPromiseMiddleware;
