import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { push, Push, goBack, GoBack } from 'connected-react-router';
import { Document } from 'react-pdf/dist/entry.webpack';
// COMPONENT
import {
  NormalExample,
  StyledSystemExample,
  AntDesignExample,
} from '@Components/ExampleComp';
// UTILS
import { pipe } from 'ramda';
import _ from 'lodash';
// TYPES
import { RouteComponentProps } from 'react-router-dom';
export interface IExampleProps extends RouteComponentProps<{ id?: string }> {
  push: Push;
  goBack: GoBack;
}

const normalJSFn = props => console.log(props);

class Example extends Component<IExampleProps> {
  componentDidMount() {
    // normal JS coding is okay
    normalJSFn('hello JS');
    console.log(this.props);
    // fetch test
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(data => console.log(data));
    // routing hook testing
  }
  render() {
    return (
      <>
        <div>Welcome to Example Page ID: {this.props.match.params.id}</div>
        <Document />
        <StyledSystemExample
          onClick={() => {
            console.log('clicked');
            return this.props.push('/example/2');
          }}
          bg={'black'}
          color={'yellow'}
        >
          {/* testing tree shaking for ramda, lodash */}
          {pipe((s: any): any => s)(
            _.camelCase('StyledSystem Example and goto /help'),
          )}
        </StyledSystemExample>
        <NormalExample
          onClick={() => {
            console.log('clicked');
            return this.props.goBack();
          }}
          normal={'hello'}
        >
          Normal Button + go back
        </NormalExample>
        <AntDesignExample
          id={'testID'}
          data-test-id={'testID'}
          color={'red'}
          test={'hello'}
          size={'large'}
        >
          Ant Button
        </AntDesignExample>
      </>
    );
  }
}

const m = (state: any) => ({});

const d = (dispatch: any) => bindActionCreators({ push, goBack }, dispatch);

export default pipe(
  withRouter,
  connect(
    m,
    d,
  ),
)(Example);
