require('normalize.css');
require('styles/App.css');

import React from 'react';
import { render } from "react-dom";
import { Link } from "react-router";

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
