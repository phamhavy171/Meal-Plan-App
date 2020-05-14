import React, { Component } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onWeightChange = this.onWeightChange.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
    const src = '../blank-profile-picture-973460_640.png';
    this.state = {
      src,
      name: '',
      age: '',
      weight: '',
    };
  }

  onNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  onAgeChange = event => {
    this.setState({
      age: event.target.value,
    });
  };

  onWeightChange = event => {
    this.setState({
      weight: event.target.value,
    });
  };

  // getProfile() {
  //   var self = this;
  //   axios
  //     .post('http://localhost:3001/users', {})
  //     .then(function (response) {
  //       if (response) {
  //         self.setState({ name: response.data.name });
  //         self.setState({ age: response.data.age });
  //         self.setState({ weight: response.data.weight });
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log('The error is ', error);
  //     });
  // }

  getProfile() {
    var self = this;
    axios
      .post('/profile', {})
      .then(function (response) {
        if (response) {
          self.setState({ name: response.data.name });
          self.setState({ age: response.data.age });
          self.setState({ weight: response.data.weight });
        }
      })
      .catch(function (error) {
        console.log('The error is ', error);
      });
  }

  // updateProfile = () => {
  //   var self = this;
  //   console.log(this.state);
  //   axios
  //     .post('http://localhost:3001/users', {
  //       name: this.state.name,
  //       age: this.state.age,
  //       weight: this.state.weight,
  //     })
  //     .then(function (response) {
  //       if (response) {
  //         console.log(response)
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log('The error is ', error);
  //     });
  // };

  updateProfile = () => {
    var self = this;
    console.log(this.state);
    axios
      .post('/profile', {
        name: this.state.name,
        age: this.state.age,
        weight: this.state.weight,
      })
      .then(function (response) {
        if (response) {
          console.log(response)
        }
      })
      .catch(function (error) {
        console.log('The error is ', error);
      });
  };

  render() {
    return (
      <Container className="mt-5">
        <Col md={{ span: 8, offset: 2 }}>
          <div>
            {this.state.id}
            <Form>
              <div
                style={{
                  display: 'grid',
                  justifyItems: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={200}
                  height={200}
                  src={this.state.src}
                  roundedCircle
                  className="mb-5"
                  // Image by <a href="https://pixabay.com/users/WandererCreative-855399/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Stephanie Edwards</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Pixabay</a>
                />
              </div>
              <Form.Group style={{ position: 'relative' }}>
                {/* <Button
                  variant="light"
                  style={{ position: 'absolute', right: '0', top: '-10px' }}
                >
                  edit
                </Button> */}
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.onNameChange}
                  required
                />
              </Form.Group>

              <Form.Group style={{ position: 'relative' }}>
                {/* <Button
                  variant="light"
                  style={{ position: 'absolute', right: '0', top: '-10px' }}
                >
                  edit
                </Button> */}
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  id="age"
                  placeholder="age"
                  value={this.state.age}
                  onChange={this.onAgeChange}
                  required
                />
              </Form.Group>

              <Form.Group style={{ position: 'relative' }}>
                {/* <Button
                  variant="light"
                  style={{ position: 'absolute', right: '0', top: '-10px' }}
                >
                </Button> */}
                <Form.Label>Weight (optional)</Form.Label>
                <Form.Control
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="weight"
                  value={this.state.weight}
                  onChange={this.onWeightChange}
                />
              </Form.Group>

              <Button
                type="submit"
                className="mb-5"
                onClick={this.updateProfile}
                method="POST"
                block
              >
                Update profile
              </Button>
            </Form>
            <h2>Recipe History</h2>
          </div>
        </Col>
      </Container>
    );
  }
}

export default Profile;
