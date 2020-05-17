import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {},
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password,
		};
		this.props.registerUser(user, this.props.history);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/');
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors,
			});
		}
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/');
		}
	}

	render() {
		const { errors } = this.state;
		return (
			<Container fluid="sm">
				<form onSubmit={this.handleSubmit}>
					<h3
						style={{ 'textAlign': 'center', padding: '20px', color: 'green' }}
					>
						Sign Up
					</h3>

					<div className="form-group">
						<label>Email address</label>
						<input
							type="email"
							name="email"
							className={classnames('form-control', {
								'is-invalid': errors.email,
							})}
							placeholder="Enter email"
							onChange={this.handleInputChange}
							value={this.state.email}
						/>
						{errors.email && (
							<div className="invalid-feedback">{errors.email}</div>
						)}
					</div>

					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							name="password"
							className={classnames('form-control', {
								'is-invalid': errors.password,
							})}
							placeholder="Enter password"
							onChange={this.handleInputChange}
							value={this.state.password}
						/>
						{errors.password && (
							<div className="invalid-feedback">{errors.password}</div>
						)}
					</div>

					<Button variant="success" type="submit" block>
						Sign Up
					</Button>
					<p className="forgot-password text-right">
						Already registered <a href="/login">sign in?</a>
					</p>
				</form>
			</Container>
		);
	}
}

SignUp.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));
