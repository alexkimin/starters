// TYPES
import { Reducer } from 'redux-act';
import { Modules } from '@Store/_rootReducer';

// following redux-act typescript
export const registerReducers = (reducer: Reducer<any>, merged: any) =>
  merged.action &&
  Object.keys(merged.action).forEach(key => {
    reducer.on(merged.action[key], merged.reducer[merged.action[key]]);
    if (merged.action[key].asyncAction) {
      const act = merged.action[key];
      if (merged.reducer[act.success]) {
        reducer.on(act.success, merged.reducer[act.success]);
      }
      if (merged.reducer[act.failure]) {
        reducer.on(act.failure, merged.reducer[act.failure]);
      }
      if (merged.reducer[act.pending]) {
        reducer.on(act.pending, merged.reducer[act.pending]);
      }
    }
  });

export const mergeAll = (modules: Modules<any>[]) =>
  modules.reduce(
    (a, c) => {
      return {
        action: { ...a.action, ...c.action },
        reducer: { ...a.reducer, ...c.reducer },
        initState: { ...a.initState, ...c.initState },
      };
    },
    { action: {}, reducer: {}, initState: {} },
  );
