import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../actions/login';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
	}

	handleClick(e) {
		e.preventDefault();
		const { username, password } = this.state;
		const creds = {
			username: username.trim(),
			password: password.trim()
		};
		this.props.loginUser(creds);
	}

	render() {
		if (this.props.auth.isAuthenticated) {
			return <Redirect to="/" />;
		}

		return (
			<div className="container">
				<div className="jumbotron">
					<form name="Login" action="/api/v1/auth/login" method="POST">
						<h3>Login below</h3>
						<div className="form-group">
							<label>User Name</label>
							<input
								type="text"
								className="form-control"
								name="username"
								placeholder="Enter username"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								name="password"
								className="form-control"
								placeholder="Password"
								onChange={this.handleChange}
							/>
						</div>
						<p className="text-danger">{this.props.auth.errorMessage}</p>
						<button onClick={this.handleClick} className="btn btn-primary">
							Login
						</button>
					</form>
				</div>
			</div>
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
		loginUser: creds => {
			return dispatch(loginUser(creds));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);
