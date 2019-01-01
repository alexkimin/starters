import { all } from 'redux-saga/effects';

const taskListeners: any[] = [];

export default function* rootSaga() {
  yield all([...taskListeners]);
}
