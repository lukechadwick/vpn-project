import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />

          {this.props.auth.isAuthenticated && (
            <button
              className="btn btn-primary m-1"
              onClick={() => this.props.logoutUser()}
            >
              Logout
            </button>
          )}

          <p>
            {this.props.auth.isAuthenticated
              ? 'Logged in as: '
              : 'Please log in'}
          </p>
          <p>
            {this.props.auth.isAuthenticated && this.props.auth.user.username}
          </p>
          <Route exact path="/" component={Home} />

          <Route exact path="/features" component={Features} />

          <Route exact path="/db" component={InternapAPI} />

          <Route exact path="/setup" component={Setup} />
          <Route exact path="/servers" component={Servers} />

          {!this.props.auth.isAuthenticated && (
            <Route
              exact
              path="/register"
              render={() => (
                <RegisterForm refreshLoginState={this.refreshLoginState} />
              )}
            />
          )}

          {!this.props.auth.isAuthenticated && (
            <Route
              exact
              path="/login"
              render={() => (
                <LoginForm refreshLoginState={this.refreshLoginState} />
              )}
            />
          )}
        </React.Fragment>
      </Router>
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
