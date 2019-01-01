// TYPES
import { Reducer } from 'redux-act';
import { Modules } from '@Store/_rootReducer';

// following redux-act typescript
export const registerReducers = (reducer: Reducer<any>, m: any) =>
  m.actions &&
  Object.keys(m.actions).forEach(key => {
    reducer.on(m.actions[key], m.reducers[m.actions[key]]);
  });

export const mergeAll = (modules: Modules<any>[]) =>
  modules.reduce(
    (a, c) => {
      return {
        actions: { ...a.actions, ...c.actions },
        reducers: { ...a.reducers, ...c.reducers },
        initState: { ...a.initState, ...c.initState },
      };
    },
    { actions: {}, reducers: {}, initState: {} },
  );
