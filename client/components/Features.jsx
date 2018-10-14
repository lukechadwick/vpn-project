import React from 'react';

const Features = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <div class="row flex">
          <div class="col-lg-4 col-sm-6">
            <div>
              <h3>
                <i class="fa fa-bolt fa-2x" /> Super Fast
              </h3>
              <p>
                Bleeding edge techniques using Asynchronous I/O and Event-driven
                programming.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div>
              <h3>
                <i class="fa fa-shield fa-2x" /> Flexible Encryption
              </h3>
              <p>
                Secured with industry level encryption algorithm. Flexible to
                support custom algorithms.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="">
              <h3>
                <i class="fa fa-mobile fa-2x" /> Mobile Ready
              </h3>
              <p>
                Optimized for mobile device and wireless network, without any
                keep-alive connections.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="">
              <h3>
                <i class="fa fa-arrows-alt fa-2x" /> Cross Platform
              </h3>
              <p>
                Available on most platforms, including Windows, Linux, Mac,
                Android, iOS, and OpenWRT.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="">
              <h3>
                <i class="fa fa-group fa-2x" /> Open Source
              </h3>
              <p>
                Totally free and open source. A worldwide community devoted to
                deliver bug-free code and long-term support.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="">
              <h3>
                <i class="fa fa-cloud fa-2x" /> Easy Deployment
              </h3>
              <p />
              <p>
                Easy deployment with{' '}
                <a href="https://pypi.python.org/pypi/shadowsocks">pip</a>,{' '}
                <a href="https://aur.archlinux.org/packages/shadowsocks-libev/">
                  aur
                </a>
                ,{' '}
                <a href="http://www.freshports.org/net/shadowsocks-libev/">
                  freshports
                </a>{' '}
                and many other package manager systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
