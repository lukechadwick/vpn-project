import React from 'react';
import { Link } from 'react-router-dom';

const Setup = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <div class="row flex">
          <div class="col-lg-6">
            <div id="content">
              <h1>Client Download</h1>
              <h3>
                Visit the Shadowsocks Github page to download the client for
                your device
              </h3>
              <hr />
              <a href="https://shadowsocks.org/en/download/clients.html">
                <button class="btn btn-default btn-lg">
                  <i class="fa fa-download" aria-hidden="true" /> Download
                </button>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div id="content">
              <h1>Configure Client</h1>
              <h3>Setup your devices client using the instructions below:</h3>
              <hr />
              <a href="https://shadowsocks.org/en/download/clients.html">
                <button class="btn btn-default btn-lg">
                  <i class="fa fa-cogs" aria-hidden="true" /> Configuration
                </button>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div id="content">
              <h1>Manual Install</h1>
              <h3>
                We also host versions here but these may not be the most
                recent/secure builds:
              </h3>
              <hr />
              <a href="[4.1.8]com.github.shadowsocks.apk">
                <i class="fa fa-android fa-4x" aria-hidden="true" />
              </a>
              <a href="Shadowsocks-4.0.7.zip">
                <i class="fa fa-windows fa-4x" aria-hidden="true" />
              </a>
              <a href="https://shadowsocks.org/en/download/clients.html">
                <i class="fa fa-mobile fa-4x" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
