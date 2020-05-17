import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

class MainNav extends Component {
	onLogout(e) {
		e.preventDefault();
		this.props.logoutUser(this.props.history);
	}

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<ul>
				<li>
					<a href="#" onClick={this.onLogout.bind(this)}>
						<img
							src={user.avatar}
							alt={user.firstname}
							title={user.firstname}
							style={{ width: '25px', marginRight: '5px' }}
						/>
						Logout
					</a>
				</li>
				<li>
					<Link to="/filter">Filter</Link>
				</li>
				<li>
					<Link to="/form">Contact</Link>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul>
				<li>
					<Link to="/signup">Sign Up</Link>
				</li>
				<li>
					<Link to="/login">Sign In</Link>
				</li>
			</ul>
		);

		return (
			<nav>
				<Link to="/">Meal Prep App</Link>
				<div>{isAuthenticated ? authLinks : guestLinks}</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(MainNav));