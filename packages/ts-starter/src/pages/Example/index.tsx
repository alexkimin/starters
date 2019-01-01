import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Route, Switch } from 'react-router-dom';

// TYPES
export interface IExampleProps {}

class Example extends Component<IExampleProps> {
  render() {
    return <div>Example Page</div>;
  }
}

const m = (state: any) => ({});

const d = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(
  m,
  d,
)(Example);
