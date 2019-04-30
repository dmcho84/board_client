import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Login, Board, BoardEmail, NotFound } from 'routes';

import { connect } from 'react-redux';
import { getAuthCheckRequest } from 'store/actions/auth.action';

@connect(
  (state, props) => ({
    auth: state.auth,
  }),
  { getAuthCheckRequest },
)
class Router extends Component {
  componentDidMount() {
    this.props.getAuthCheckRequest();
  }

  render() {
    console.log(`env`, process.env);
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/board/:email" component={BoardEmail} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default Router;
