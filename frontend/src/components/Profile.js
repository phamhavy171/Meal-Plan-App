import React, { Component } from 'react';
// import React, { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      age: '',
      weight: '',
    };

    this.changeValueHandler = this.changeValueHandler.bind(this);

    this.updateProfileHandler = this.updateProfileHandler.bind(this);

    // this.getProfileHandler = this.getProfileHandler.bind(this);
  }

  // const Profile = () => {
  //   // const src = '../blank-profile-picture-973460_640.png';
  //   // const email = 't@t.t';
  //   const [updatedUserData, setUpdatedUserData] = useState({
  //     email: '',
  //     name: '',
  //     age: '',
  //     weight: '',
  //   });

  // const changeValueHandler = e => {
  //   setUpdatedUserData({
  //     ...updatedUserData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  changeValueHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // getProfileHandler() {
  //   var self = this;
  //   axios
  //     .get('http://localhost:5000/users/ec10c45686f470810478f11', {})
  //     .then(function (response) {
  //       console.log(response);
  //       if (response) {
  //         self.setState({ email: response.data.email });
  //         self.setState({ name: response.data.name });
  //         self.setState({ age: response.data.age });
  //         self.setState({ weight: response.data.weight });
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log('The error is ', error);
  //     });
  // }

  updateProfileHandler(e) {
    e.preventDefault();
    console.log(this.state);

    axios({
      method: 'patch',
      url: 'http://localhost:3000/api/users/5ec17e49c8afc1310e1d8731',
      data: {
        email: this.state.email,
        name: this.state.name,
        age: this.state.age,
        weight: this.state.weight,
      },
    })
      .then(function (response) {
        if (response) {
          console.log(response);
          alert('Update successful');
        }
      })
      .catch(function (error) {
        console.log('The error is ', error);
      });
  }
  render() {
    return (
      <>
        <Container className="mt-5">
          <Col md={{ span: 8, offset: 2 }}>
            <div>
              <Form onSubmit={this.updateProfileHandler}>
                <div
                  style={{
                    display: 'grid',
                    justifyItems: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    width={150}
                    height={150}
                    src={'../blank-profile-picture-973460_640.png'}
                    roundedCircle
                    className="mb-5"
                    // Image by <a href="https://pixabay.com/users/WandererCreative-855399/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Stephanie Edwards</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Pixabay</a>
                  />
                </div>

                <Form.Group>
                  <Form.Label>Email</Form.Label> <span>{this.state.email}</span>
                  <Form.Control
                    type="text"
                    name="email"
                    id="email"
                    value={this.state.email}
                    placeholder="email"
                    onChange={this.changeValueHandler}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Name</Form.Label> <span>{this.state.name}</span>
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    placeholder="name"
                    onChange={this.changeValueHandler}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Age</Form.Label> <span>{this.state.age}</span>
                  <Form.Control
                    type="number"
                    name="age"
                    id="age"
                    value={this.state.age}
                    placeholder="age"
                    onChange={this.changeValueHandler}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Weight (optional)</Form.Label>{' '}
                  <span>{this.state.weight}</span>
                  <Form.Control
                    type="number"
                    name="weight"
                    id="weight"
                    value={this.state.weight}
                    placeholder="weight"
                    onChange={this.changeValueHandler}
                  />
                </Form.Group>

                <Button type="submit" className="mb-5" block>
                  Update profile
                </Button>
                {/* <Button type="submit" className="mb-5" block onClick={this.getProfileHandler}>
                  Get profile
                </Button> */}
              </Form>
            </div>
          </Col>
        </Container>
      </>
    );
  }
}

export default Profile;
