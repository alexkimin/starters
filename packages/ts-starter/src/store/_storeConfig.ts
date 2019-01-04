import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { disbatch } from 'redux-act';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
// INTERNALS
import createRootReducer from '@Store/_rootReducer';
import rootSaga from '@Store/_rootSaga';
import persistTransformFilter from '@Store/_persistFilter';
// TYPES
import { Store } from 'redux';
import { ApplicationState } from '@Store/_rootReducer';
import { Persistor, PersistConfig } from 'redux-persist';

export type InitState = {};
export type EpicDependancies = {
  axios: any;
};
interface CreateStore<S> {
  store: Store<S>;
  persistor: Persistor;
}

// History obj configuration
export const history = createBrowserHistory({
  basename:
    process.env.NODE_ENV === 'production'
      ? process.env.BASE_PROD
      : process.env.BASE_DEV,
});
// Persist storage configuration
export const persistConfig: PersistConfig = {
  storage,
  key: 'root',
  whitelist: ['modify'],
  timeout: null,
  transforms: persistTransformFilter,
};

// Store creator
export default function configureStore(
  initialState?: InitState,
): CreateStore<ApplicationState> {
  // Middlewares
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware(history), sagaMiddleware];

  // Enhancers
  const composeEnhancers = composeWithDevTools({});

  // Create Store
  const store = createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    initialState!,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  // Run the saga
  sagaMiddleware.run(rootSaga);

  // register disbatch method of redux-act
  disbatch(store);

  // Redux-persit
  const persistor = persistStore(store);

  // Hot Module Reloading
  if (module.hot) {
    module.hot.accept('./_rootReducer', () => {
      store.replaceReducer(
        persistReducer(persistConfig, createRootReducer(history)),
      );
    });
  }

  return { store, persistor };
}
