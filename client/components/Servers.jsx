import React from 'react';
import { Link } from 'react-router-dom';

const Servers = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <div class="col-lg-6">
          <div id="content">
            <h1>Server: Miami</h1>
            <hr />
            <h3>Server Status: Running...</h3>
            <hr />
            <p>Server IP: 207.246.67.158</p>
            <hr />
            <p>Server Port: 445</p>
            <hr />
            <p>Enryption Method: chacha20-ietf-poly1305</p>

            <hr />
          </div>
        </div>
        <div class="col-lg-6">
          <div id="content">
            <h1>Server: L.A</h1>
            <hr />
            <h3>Server Status: Down</h3>
            <hr />
            <p>Server IP: 127.0.0.1</p>
            <hr />
            <p>Server Port: 1080</p>
            <hr />
            <p>Enryption Method: aes-256-gcm</p>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servers;
