// import React, { Component } from 'react';
import React, { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// class Profile extends Component {
//   constructor() {
//     super();
//     const src = '../blank-profile-picture-973460_640.png';
//     const email = 't@t.t'
//     this.state = {
//       src,
//       email,
//       name: '',
//       age: '',
//       weight: '',
//     };
//     this.onNameChange = this.onNameChange.bind(this);
//     this.onAgeChange = this.onAgeChange.bind(this);
//     this.onWeightChange = this.onWeightChange.bind(this);
//     this.updateProfileHandler = this.updateProfileHandler.bind(this);
//     // this.getProfile = this.getProfile.bind(this);
//   }

const Profile = () => {
  // const src = '../blank-profile-picture-973460_640.png';
  const email = 't@t.t';
  const [updatedUserData, setUpdatedUserData] = useState({
    email,
    name: '',
    age: '',
    weight: '',
  });

  const changeValueHandler = e => {
    setUpdatedUserData({
      ...updatedUserData,
      [e.target.name]: e.target.value,
    });
  };

  // onNameChange = event => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };

  // onAgeChange = event => {
  //   this.setState({
  //     age: event.target.value,
  //   });
  // };

  // onWeightChange = event => {
  //   this.setState({
  //     weight: event.target.value,
  //   });
  // };

  // getProfile() {
  //   var self = this;
  //   axios
  //     .post('http://localhost:5000/users/profile', {})
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

  const updateProfileHandler = e => {
    e.preventDefault();
    console.log(updatedUserData);

    axios
      .post('http://localhost:3000/users/profile/' + email, updatedUserData)
      .then(response => {
        console.log(response.data);
        setUpdatedUserData(response.data);
      });
  };

  // updateProfileHandler = e => {
  //   e.preventDefault();
  //   console.log(this.state);

  //   axios
  //     .post('http://localhost:3000/api/users/profile/send/:params', {
  //       email: this.state.email,
  //       name: this.state.name,
  //       age: this.state.age,
  //       weight: this.state.weight,
  //     })
  //     .then(function (response) {
  //       if (response) {
  //         console.log(response);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log('The error is ', error);
  //     });
  // };

  // render() {
  return (
    <>
      <Container className="mt-5">
        <Col md={{ span: 8, offset: 2 }}>
          <div>
            {/* <Form onSubmit={this.updateProfileHandler}> */}
            <Form onSubmit={updateProfileHandler}>
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
                  // src={this.state.src}
                  src={'../blank-profile-picture-973460_640.png'}
                  roundedCircle
                  className="mb-5"
                  // Image by <a href="https://pixabay.com/users/WandererCreative-855399/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Stephanie Edwards</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Pixabay</a>
                />
              </div>

              <Form.Group>
                {/* <Button
                  variant="light"
                  style={{ position: 'absolute', right: '0', top: '-10px' }}
                >
                  edit
                </Button> */}
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  // value={this.state.email}
                  // onChange={this.changeValueHandler}
                  // value={this.state.email}
                  value={'t@t.t'}
                  onChange={changeValueHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  // value={this.state.name}
                  // onChange={this.changeValueHandler}
                  onChange={changeValueHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  id="age"
                  placeholder="age"
                  // value={this.state.age}
                  // onChange={this.changeValueHandler}
                  onChange={changeValueHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Weight (optional)</Form.Label>
                <Form.Control
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="weight"
                  // value={this.state.weight}
                  // onChange={this.changeValueHandler}
                  onChange={changeValueHandler}
                />
              </Form.Group>

              <Button type="submit" className="mb-5" method="POST" block>
                Update profile
              </Button>
              <div>
                <p>{updatedUserData.email}</p>
                <p>{updatedUserData.name}</p>
                <p>{updatedUserData.age}</p>
                <p>{updatedUserData.weight}</p>
              </div>
            </Form>
            <h2>Recipe History</h2>
          </div>
        </Col>
      </Container>
    </>
  );
  // }
};

export default Profile;
