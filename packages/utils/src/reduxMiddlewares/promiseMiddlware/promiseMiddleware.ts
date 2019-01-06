import { Middleware, Dispatch, AnyAction } from 'redux';

type Config = {
  pending: string;
  success: string;
  failure: string;
};

type Res = Response & {
  data?: any;
};

function createPromiseMiddleware(
  config: Config = {
    pending: '_PENDING',
    success: '_SUCCESS',
    failure: '_FAILURE',
  },
): Middleware<any, any, Dispatch> {
  return ({ dispatch }) => next => (action: AnyAction) => {
    const { payload } = action;

    // normal actions
    if (!(payload instanceof Promise)) return next(action);

    // promise handling
    const promise = payload;
    const { meta, error } = action;
    dispatch({
      meta,
      error,
      type: action.type + config.pending,
    });
    return promise
      .then((res: Res) =>
        dispatch({
          meta,
          error,
          payload: res.data,
          type: action.type + config.success,
        }),
      )
      .catch((error: any) =>
        dispatch({
          meta,
          error,
          payload: error,
          type: action.type + config.pending,
        }),
      );
  };
}

export default createPromiseMiddleware;
