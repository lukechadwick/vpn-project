import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Servers extends Component {
	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<div className="container">
						<div className="row">
							<div className="col-sm content">
								<h1>Server: Miami</h1>
								<hr />
								<h3>
									Server Status: <span style={{ color: 'lime' }}>Up</span>
								</h3>
								<hr />
								{this.props.isAuthenticated ? (
									<Fragment>
										<p>Scan the QR code in app for auto-setup</p>
										<img src="QR-US.png" width="60%" />
										<hr />

										<h4>Manual Config:</h4>
										<p>Server IP: 207.246.67.158</p>
										<hr />
										<p>Server Port: 445</p>
										<hr />
										<p>Enryption Method: chacha20-ietf-poly1305</p>
										<hr />
									</Fragment>
								) : (
									<Fragment>
										<p>Login for server details</p>
										<hr />
									</Fragment>
								)}
							</div>
							<div className="col-sm content">
								<h1>Server: Japan</h1>
								<hr />
								<h3>
									Server Status: <span style={{ color: 'red' }}>Down</span>
								</h3>
								<hr />
								{this.props.isAuthenticated ? (
									<Fragment>
										<p>Scan the QR code in app for auto-setup</p>
										<img src="QR-JP.png" width="60%" />

										<hr />
										<h4>Manual Config:</h4>
										<p>Server IP: 45.77.183.222 </p>
										<hr />
										<p>Server Port: 1080</p>
										<hr />
										<p>Enryption Method: xchacha20-ietf-poly1305</p>
										<hr />
									</Fragment>
								) : (
									<Fragment>
										<p>Login for server details</p>
										<hr />
									</Fragment>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Servers;
