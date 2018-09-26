import React from 'react';
import { Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-lg-12">
          <div id="content">
            <h1>CodeProject VPN</h1>
            <h3>Secure VPN Powered by Open-Source Tech</h3>
            <hr />
            <Link to="/setup">
              <button class="btn btn-default btn-lg">
                <i class="fa fa-shield mr-2" aria-hidden="true" />
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
