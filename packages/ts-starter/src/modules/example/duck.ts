import produce from 'immer';
import { createAsyncAction } from '@Utils/redux';
import * as api from './api';
import * as constant from './constant';

const getDogs = createAsyncAction<any>(`${constant.moduleName}/GET_DOG_SIMPLE`);
export const getDogsApi = api.exampleApi(getDogs);

// with immer
const getDogsReducer = (state: any, payload: any) =>
  produce(state, draft => {
    draft[constant.modulePath] = {
      dogUrl: payload.message,
    };
  });

const reducer = {
  [getDogs.success.toString()]: getDogsReducer,
};

export default {
  reducer,
  action: {
    getDogs,
  },
  actions: {
    getDogs: getDogsApi,
  },
  initState: {} as any,
};
