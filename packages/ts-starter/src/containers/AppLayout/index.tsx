import React, { Component } from 'react';

export interface IAppLayout {}

class AppLayout extends Component<IAppLayout> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default AppLayout;
