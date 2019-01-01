import { combineReducers, Reducer } from 'redux';
import { createReducer } from 'redux-act';
import { connectRouter } from 'connected-react-router';
// UTILS
import { registerReducers, mergeAll } from '@Store/utils';
// MODULES
import persist from '@Modules/persist';
// TYPES
import { AnyAction } from 'redux';
import { History } from 'history';
export interface Modules<S> {
  reducer?: object;
  reducers: object;
  actions: object;
  initState: S;
}

/* update below when there is a new module */
type AppMergedState = {};

const modules: Modules<AppMergedState>[] = [
  /* add more models to be merged as one reducer */
];

export interface ApplicationState {
  app: AppMergedState;
  router: any;
}
// Merging actions, reducers, initState of the models of any modules into each object.
export const merged: Modules<AppMergedState> = mergeAll([...modules]);

// init app reducer.
const appReducer = createReducer<AppMergedState>({}, merged.initState);

// register reducer logics to the app reducer.
registerReducers(appReducer, merged);

// each reducer that combined by combineReducers will not be allow to communicate each other.
const _createRootReducer = (history: History): Reducer<ApplicationState> =>
  combineReducers<ApplicationState>({
    router: connectRouter(history),
    app: appReducer,
  });

export default (history: History) => (
  state: ApplicationState,
  action: AnyAction,
) => {
  const initStates = persist.interceptor(state, action);
  return _createRootReducer(history)(initStates, action);
};
