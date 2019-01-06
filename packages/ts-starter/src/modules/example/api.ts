import axios from 'axios';
import { until } from '@Utils/async';
import { asyncDispatcher } from '@Utils/redux';

import { Store } from 'redux';
import { StoreWithDisbatch } from 'redux-act';

const exampleApiUrl = 'https://dog.ceo/api/breeds/image/random';

// thunk-like additional operation API case, side-effect will be generated in thunk middleware
// createAsyncAction needed
export const exampleApi: any = (action: any) => () => async ({
  dispatch,
  disbatch,
  getState,
}: StoreWithDisbatch<Store>) => {
  const [err, res] = await until<any>(axios.get(exampleApiUrl));
  // do sth more if necessary
  return dispatch(
    err ? action.failure({ ...err }) : action.success({ ...res }),
  );
};

// same as above but abstracted.
export const abstracedExampleApi = asyncDispatcher<any>(() =>
  axios.get(exampleApiUrl),
);
