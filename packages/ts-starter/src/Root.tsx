import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@Styled';
import { PersistGate } from 'redux-persist/integration/react';
// CONTAINERS
import App from '@/App';
// CONFIGS
import { store, persistor } from '@Store';
import { history } from '@Store/_storeConfig';
import { theme } from '@Styled';
// TYPES
export interface IRootProps {}

class Root extends Component<IRootProps> {
  render() {
    return (
      <Provider store={store}>
        {/* remove PersistGate if persist affects init loading speed */}
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default hot(module)(Root);
