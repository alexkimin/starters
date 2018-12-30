import { Store, Action, AnyAction, Middleware } from 'redux';

interface ThunkDispatch<S, E, A extends Action> {
  <T extends A>(action: T): T;
  <R>(thunkAction: ThunkActionWithStore<R, S, E, A>): R;
}

type ThunkActionWithStore<R, S, E, A extends Action> = (
  store: Store<S, A>,
  extraArgument: E,
) => R;

type ThunkMiddleware<
  S = {},
  A extends Action = AnyAction,
  E = undefined
> = Middleware<ThunkDispatch<S, E, A>, S, ThunkDispatch<S, E, A>>;

type ThunkWithStore = ThunkMiddleware & {
  withExtraArgument?<E>(extraArgument: E): ThunkMiddleware<{}, AnyAction, E>;
};

function createThunkMiddleware(...args: any[]) {
  return (store => next => action =>
    typeof action === 'function'
      ? action(store, ...args)
      : next(action)) as Middleware;
}

const thunkWithStore: ThunkWithStore = createThunkMiddleware();
thunkWithStore.withExtraArgument = createThunkMiddleware;

export default thunkWithStore;
