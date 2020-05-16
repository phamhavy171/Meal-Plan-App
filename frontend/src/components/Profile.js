import React, { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Profile = () => {
  // const src = '../blank-profile-picture-973460_640.png';
  // const email = 't@t.t';
  const [updatedUserData, setUpdatedUserData] = useState({
    email: '',
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

    axios({
      method: 'patch',
      url: 'http://localhost:5000/users/5ec02dba34431b291455d1a5',
      data: {
        updatedUserData
      }
    })
    .then(function (response) {
      if (response) {
        console.log(response);
      }
    })
    .catch(function (error) {
      console.log('The error is ', error);
    });
  };

  return (
    <>
      <Container className="mt-5">
        <Col md={{ span: 8, offset: 2 }}>
          <div>
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
                  src={'../blank-profile-picture-973460_640.png'}
                  roundedCircle
                  className="mb-5"
                  // Image by <a href="https://pixabay.com/users/WandererCreative-855399/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Stephanie Edwards</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Pixabay</a>
                />
              </div>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  // value={'t@t.t'}
                  onChange={changeValueHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Name</Form.Label>{' '}
                <span>{updatedUserData.name}</span>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  onChange={changeValueHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Age</Form.Label> <span>{updatedUserData.age}</span>
                <Form.Control
                  type="number"
                  name="age"
                  id="age"
                  placeholder="age"
                  onChange={changeValueHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Weight (optional)</Form.Label>{' '}
                <span>{updatedUserData.weight}</span>
                <Form.Control
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="weight"
                  onChange={changeValueHandler}
                />
              </Form.Group>

              <Button type="submit" className="mb-5" method="POST" block>
                Update profile
              </Button>
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
