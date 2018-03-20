import React, { Component } from 'react';

import Header from './header';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}
