import React from 'react';
import { render } from 'react-dom';
import App from './Main';

import About from "./about"
import Inbox from "./inbox"
import InboxStats from "./inbox/stats/"
import Message from "./inbox/message"

import { Router, Route, IndexRoute } from "react-router";

// Render the main component into the dom


render((
  <Router>
    <Route path="/" component={ App }>
      <Route path="about" component={ About } />
      <Route path="inbox" component={ Inbox }>
        <IndexRoute component={ InboxStats } />
        <Route path="messages/:id" component={ Message } />
      </Route>
    </Route>
  </Router>
), document.getElementById("app"));
