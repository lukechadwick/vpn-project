import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import InternapAPI from './InternapAPI';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Navbar from './Navbar';
import Features from './Features';
import Home from './Home';
import Setup from './Setup';
import Servers from './Servers';

import { logoutUser } from '../actions/logout';
import AdminPanel from './AdminPanel';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          isAuthenticated={this.props.auth.isAuthenticated}
          logoutUser={this.props.logoutUser}
          userName={
            this.props.auth.isAuthenticated && this.props.auth.user.username
          }
        />

        <Route exact path='/' component={Home} />
        <Route exact path='/features' component={Features} />
        <Route exact path='/db' component={InternapAPI} />
        <Route exact path='/setup' component={Setup} />
        <Route exact path='/admin' component={AdminPanel} />

        <Route
          exact
          path='/servers'
          render={() => (
            <Servers isAuthenticated={this.props.auth.isAuthenticated} />
          )}
        />

        <Route exact path='/register' component={RegisterForm} />
        <Route exact path='/login' component={LoginForm} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
