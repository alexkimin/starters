import {
  createAction,
  PayloadReducer,
  MetaReducer,
  ComplexActionCreator,
  EmptyActionCreator,
} from 'redux-act';
import { identity } from 'ramda';

interface AsyncActionCreator<P, M, K> extends ComplexActionCreator<P, M> {
  pending?: EmptyActionCreator;
  success?: ComplexActionCreator<K, M>;
  failure?: ComplexActionCreator<K, M>;
}

export const createAsyncAction = <P, M = {}>(
  actionType: string,
  payloadReducer?: PayloadReducer<P>,
  metaReducer?: MetaReducer<M>,
) => {
  const action: AsyncActionCreator<P, M, Response> = createAction<P, M>(
    actionType,
    payloadReducer,
    metaReducer,
  );
  action.pending = createAction(`${actionType}_PENDING`);
  action.success = createAction(`${actionType}_SUCCESS`, identity, metaReducer);
  action.failure = createAction(`${actionType}_FAILURE`, identity, metaReducer);
  return action;
};
