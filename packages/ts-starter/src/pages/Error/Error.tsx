import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';

// TYPES
export interface IErrorProps {}

class Error extends Component<IErrorProps> {
  render() {
    return <div>Page Not Found</div>;
  }
}

export default Error;
