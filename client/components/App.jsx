import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import InternapAPI from './InternapAPI';
import ExternalAPI from './ExternalAPI';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Logout from './Logout';
import Navbar from './Navbar';
import Features from './Features';
import Home from './Home';
import Setup from './Setup';
import Servers from './Servers';

import { isAuthenticated, getUserTokenInfo } from '../utils/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      loggedInAs: ''
    };
    this.logOut = this.logOut.bind(this);
    this.refreshLoginState = this.refreshLoginState.bind(this);
  }

  componentDidMount() {
    this.setState({
      authenticated: isAuthenticated()
    });
  }

  logOut() {
    this.setState({ authenticated: false });
  }

  refreshLoginState() {
    this.setState({
      authenticated: isAuthenticated()
    });
  }

  render() {
    return (
      <React.Fragment>
        <script
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossorigin="anonymous"
        />
        <Navbar />

        <p>{this.state.authenticated ? 'Logged in as: ' : 'Please log in'}</p>
        <p>{this.state.authenticated && getUserTokenInfo().username}</p>

        <Route exact path="/" component={Home} />

        <Route exact path="/features" component={Features} />

        <Route exact path="/db" component={InternapAPI} />
        <Route exact path="/ext" component={ExternalAPI} />

        <Route exact path="/setup" component={Setup} />
        <Route exact path="/servers" component={Servers} />

        {!this.state.authenticated && (
          <Route
            exact
            path="/register"
            render={() => (
              <RegisterForm refreshLoginState={this.refreshLoginState} />
            )}
          />
        )}

        {!this.state.authenticated && (
          <Route
            exact
            path="/login"
            render={() => (
              <LoginForm refreshLoginState={this.refreshLoginState} />
            )}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;

// {!this.state.authenticated && (
//   <React.Fragment>
//     <Link to="/register">
//       <button className="btn btn-primary m-1">Register</button>
//     </Link>
//     <Link to="/login">
//       <button className="btn btn-primary m-1">Login</button>
//     </Link>
//   </React.Fragment>
// )}
// {this.state.authenticated && <Logout logOut={this.logOut} />}
