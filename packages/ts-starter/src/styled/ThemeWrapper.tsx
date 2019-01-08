import React, { Component } from 'react';
import { ThemeProvider, theme } from '@Styled';

export default class ThemeWrapper extends Component<{
  children: React.ReactChild;
}> {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}
