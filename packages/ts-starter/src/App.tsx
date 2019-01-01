import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// ASSETS
import favicon from '@Images/favicon.ico';
// CONFIG

// TYPES
export interface IAppProps {}

class App extends Component<IAppProps> {
  render() {
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
          {process.env.NODE_ENV === 'production' && (
            <meta
              http-equiv="Content-Security-Policy"
              content={
                /* tslint:disable */
                `default-src 'self' 'unsafe-inline' 'unsafe-eval' data:;
                  script-src 'self' 'unsafe-inline' 'unsafe-eval' data:;
                  style-src 'self' 'unsafe-inline' data: blob:;
                  img-src 'self' 'unsafe-inline' data:;
                  frame-src *;
                  child-src *;
                  font-src *;`
                /* tslint:enable */
              }
            />
          )}
        </Helmet>
        {/* App Routes */}
      </>
    );
  }
}

export default App;
