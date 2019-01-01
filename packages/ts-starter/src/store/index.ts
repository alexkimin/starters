/// <reference path="./index.d.ts" />
import createStore from '@Store/_storeConfig';

const { store, persistor } = createStore();
export { store, persistor };
