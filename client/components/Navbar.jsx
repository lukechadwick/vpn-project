import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <a href="/" class="navbar-brand">
            <i class="fa fa-code" aria-hidden="true" /> CodeProject
          </a>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link to="/features">
              <li class="nav-item">
                <a class="nav-link">Features</a>
              </li>
            </Link>
            <Link to="/servers">
              <li class="nav-item">
                <a class="nav-link">Servers</a>
              </li>
            </Link>
            <Link to="/setup">
              <li class="nav-item">
                <a class="nav-link">Setup</a>
              </li>
            </Link>
            <Link to="/register">
              <li class="nav-item">
                <a class="nav-link">Register</a>
              </li>
            </Link>

            <Link to="/login">
              <li class="nav-item navbar-right">
                <a class="nav-link">Login</a>
              </li>
            </Link>
            {/* <Link to="/db">
              <button className="btn btn-primary m-1">Database Query</button>
            </Link>
            <Link to="/ext">
              <button className="btn btn-primary m-1">
                External API Query
              </button>
            </Link> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
