import React, { Component } from 'react';

export interface IPageLayout {}

class PageLayout extends Component<IPageLayout> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default PageLayout;
