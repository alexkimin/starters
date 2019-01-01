import { createAction } from 'redux-act';
// TYPES
import { AnyAction } from 'redux';

// ACTIONS
export const actions = {
  purgeStateAndSession: createAction('PURGE_STATE_AND_SESSION'),
  purgeSessionStorage: createAction('PURGE_SESSION_STORAGE'),
};

// REDUCERS
const reducers = {
  [actions.purgeStateAndSession.toString()]: (
    state: any,
    payload: string = '',
  ): any => {
    window.sessionStorage.clear();
    return undefined;
  },
  [actions.purgeSessionStorage.toString()]: (
    state: any,
    payload: string = '',
  ): any => {
    payload
      ? sessionStorage.removeItem(`persist:${payload}`)
      : sessionStorage.clear();
    return state;
  },
};

export default {
  reducers,
  actions,
  interceptor: (state: any, action: AnyAction) => {
    let initStates = state;
    if (action.type === actions.purgeStateAndSession.toString()) {
      initStates = reducers[actions.purgeStateAndSession.toString()](
        initStates,
      );
    }
    if (action.type === actions.purgeSessionStorage.toString()) {
      initStates = reducers[actions.purgeSessionStorage.toString()](initStates);
    }
    return initStates;
  },
};
