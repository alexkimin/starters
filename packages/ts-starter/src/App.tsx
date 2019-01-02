import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
// PAGES
import Example from '@Pages/Example';
import Help from '@Pages/Help';
// ASSETS
import favicon from '@Images/favicon.ico';
// CONFIG
import { GlobalStyle } from '@Styled';
// TYPES
export interface IAppProps {}

class App extends Component<IAppProps> {
  render() {
    const devUrl = process.env.NODE_ENV === 'production' ? '' : 'localhost/*';
    const hostUrl = '*.income.com.sg';
    return (
      <>
        {/* Meta tag setups */}
        <Helmet>
          <link rel="shortcut icon" type="image/icon" href={favicon} />
          {process.env.BROWSER_CACHE_DISABLED && [
            <meta http-equiv="cache-control" content="no-cache" key="cache" />,
            <meta http-equiv="expires" content="0" key="expires" />,
            <meta http-equiv="pragma" content="no-cache" key="pragma" />,
            <meta
              http-equiv="Strict-Transport-Security"
              content="no-cache"
              key="STS"
            />,
          ]}
          <meta
            http-equiv="Content-Security-Policy"
            content={
              /* tslint:disable */
              `default-src 'self' 'unsafe-inline' 'unsafe-eval' ${devUrl} ${hostUrl} data:;
                script-src 'self' 'unsafe-inline' 'unsafe-eval' ${devUrl} ${hostUrl} data:;
                style-src 'self' 'unsafe-inline' ${devUrl} ${hostUrl} data: blob:;
                img-src 'self' ${devUrl} ${hostUrl} data:;
                frame-src *;
                child-src *;
                font-src *;`
              /* tslint:enable */
            }
          />
        </Helmet>
        {/* Global CSS */}
        <GlobalStyle />
        {/* App Routes */}
        <Switch>
          <Route exact path="/entry" component={Example} />
          <Route path="*" component={Help} />
        </Switch>
      </>
    );
  }
}

export default App;
