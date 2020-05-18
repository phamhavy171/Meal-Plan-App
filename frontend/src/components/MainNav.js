import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Button from 'react-bootstrap/Button';

class MainNav extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav>
        <LinkContainer to="/profile">
          <NavItem className="mr-5">Profile</NavItem>
        </LinkContainer>
        <LinkContainer to="#" onClick={this.onLogout.bind(this)}>
          <NavItem className="mr-5">
            <Button variant="light">
              <img
                src={user.avatar}
                alt="avatar"
                title={user.name}
                style={{
                  width: '25px',
                  marginRight: '5px',
                  borderRadius: '50%',
                }}
              />
              Logout
            </Button>
          </NavItem>
        </LinkContainer>
      </Nav>
    );

    const guestLinks = (
      <Nav>
        <LinkContainer to="/signup">
          <NavItem className="mr-5">Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem className="mr-5">Sign In</NavItem>
        </LinkContainer>
      </Nav>
    );

    return (
      <Navbar bg="light" variant="light" expand="md">
        <LinkContainer to="/#">
          <Navbar.Brand>Meal Prep App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        />
        <Nav>
          <LinkContainer to="/">
            <NavItem className="mr-5">Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem className="mr-5">About</NavItem>
          </LinkContainer>
          <LinkContainer to="/filter">
            <NavItem className="mr-5">Filter</NavItem>
          </LinkContainer>
          <LinkContainer to="/form">
            <NavItem className="mr-5">Contact</NavItem>
          </LinkContainer>
          <div>{isAuthenticated ? authLinks : guestLinks}</div>
        </Nav>
      </Navbar>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(MainNav));
