import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Route, Switch } from 'react-router-dom';

// COMPONENT
import ExampleComp from '@Components/ExampleComp';
// TYPES
export interface IExampleProps {}

class Example extends Component<IExampleProps> {
  render() {
    return (
      <ExampleComp
        onClick={() => console.log('clicked')}
        bg={'black'}
        color={'yellow'}
      >
        Example Page
      </ExampleComp>
    );
  }
}

const m = (state: any) => ({});

const d = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(
  m,
  d,
)(Example);
