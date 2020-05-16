import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class Login extends Component {
  constructor() {
		super();
		this.state = {
			email: '',
			password: '',
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
    console.log(this.state);

    axios({
      method: 'post',
      url: 'http://localhost:5000/users/login',
      data: {
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then(function (response) {
        if (response) {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log('The error is ', error);
      });
  }
  
  render() {
    return (
      <Container fluid="sm">
        <form onSubmit={this.handleSubmit}>
          <h3
            style={{ 'text-align': 'center', padding: '20px', color: 'green' }}
          >
            Sign In
          </h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={this.handleInputChange}
							value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handleInputChange}
							value={this.state.password}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <Button variant="success" block type="submit">
            Sign In
          </Button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </Container>
    );
  }
}

export default Login;
