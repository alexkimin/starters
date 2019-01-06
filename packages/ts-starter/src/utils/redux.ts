import { createAction } from 'redux-act';
import { identity } from 'ramda';
import { until } from '@Utils/async';
// TYPES
import { Store } from 'redux';
import {
  PayloadReducer,
  MetaReducer,
  ComplexActionCreator,
  EmptyActionCreator,
  StoreWithDisbatch,
} from 'redux-act';

interface AsyncActionCreator<P, M, K> extends ComplexActionCreator<P, M> {
  asyncAction?: boolean;
  pending?: EmptyActionCreator;
  success?: ComplexActionCreator<K, M>;
  failure?: ComplexActionCreator<K, M>;
}

/**
 * @function createAsyncAction
 * @desc extension of redux-act createAction, adding postfix actions related to promise.
 * @example
 * const anAsyncAction = createAsyncAction('ACTION_TYPE');
 * @returns action creator
 */
export const createAsyncAction = <P, M = {}>(
  actionType: string,
  payloadReducer?: PayloadReducer<P>,
  metaReducer?: MetaReducer<M>,
) => {
  const ActionType = actionType.toUpperCase();
  const action: AsyncActionCreator<P, M, Res> = createAction<P, M>(
    ActionType,
    payloadReducer,
    metaReducer,
  );
  action.asyncAction = true;
  action.pending = createAction(`${ActionType}_PENDING`);
  action.success = createAction(`${ActionType}_SUCCESS`, identity, metaReducer);
  action.failure = createAction(`${ActionType}_FAILURE`, identity, metaReducer);
  return action;
};

/**
 * @function asyncDispatcher
 * @desc abstracted function for promise actions
 * @example
 * const anAsyncAction = createAsyncAction('ACTION_TYPE');
 * const anThunkAction = asyncDispatcher((payload: any) => axios.post('url', payload))(anAsyncAction)
 * @returns function that will consumed by thunk middleware
 */
export const asyncDispatcher = <T = any>(promiseFn: any) => (action: any) => (
  payload: any,
) => async ({ dispatch }: StoreWithDisbatch<Store>) => {
  const [err, res] = await until<T>(promiseFn(payload));
  return err
    ? dispatch(action.failure({ ...err }))
    : dispatch(action.success({ ...res }));
};
