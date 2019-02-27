import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to='/'>
          <span href='/' className='navbar-brand'>
            <i className='fa fa-code' aria-hidden='true' /> CodeProject
          </span>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <Link to='/features'>
              <li className='nav-item'>
                <span className='nav-link'>Features</span>
              </li>
            </Link>
            <Link to='/servers'>
              <li className='nav-item'>
                <span className='nav-link'>Servers</span>
              </li>
            </Link>
            <Link to='/setup'>
              <li className='nav-item'>
                <span className='nav-link'>Setup</span>
              </li>
            </Link>
          </ul>
          <ul className='navbar-nav ml-auto'>
            {!this.props.isAuthenticated && (
              <Fragment>
                <Link to='/register'>
                  <li className='nav-item'>
                    <span className='nav-link'>
                      <i className='fa fa-user-plus' aria-hidden='true' />{' '}
                      Register
                    </span>
                  </li>
                </Link>

                <Link to='/login'>
                  <li className='nav-item'>
                    <span className='nav-link'>
                      <i className='fa fa-user' aria-hidden='true' /> Login
                    </span>
                  </li>
                </Link>
              </Fragment>
            )}

            {this.props.isAuthenticated && (
              <React.Fragment>
                <Link to='/admin'>
                  <li className='nav-item'>
                    <span className='nav-link'>
                      <i className='fa fa-user' aria-hidden='true' /> Admin
                      Panel
                    </span>
                  </li>
                </Link>
                <Link to='/'>
                  <li className='nav-item'>
                    <span
                      className='nav-link'
                      onClick={() => this.props.logoutUser()}
                    >
                      {this.props.userName}:{'  '}
                      <i className='fa fa-user' aria-hidden='true' /> Logout
                    </span>
                  </li>
                </Link>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
