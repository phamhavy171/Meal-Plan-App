import React, { Component } from 'react';
// import View from './ProfileView';
// import Edit from './EditView';
import axios from 'axios';
import { loginUser } from '../actions/authentication';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// const EditNow = () => {
//   const onClick = () => {
//     this.setState({
//       edit: true,
//     });
//     return (
//       <div>
//         <input type="submit" value="Edit" onClick={onClick} />
//         {Edit ? <EditPage /> : null}
//       </div>
//     )
//   };
// };

// const EditPage = () => <Edit />

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      age: '',
      weight: '',
      // edit: false,
    };

    this.changeValueHandler = this.changeValueHandler.bind(this);

    this.updateProfileHandler = this.updateProfileHandler.bind(this);
  }

  changeValueHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  updateProfileHandler(e) {
    e.preventDefault();
    // console.log(this.state);

    axios({
      method: 'patch',
      url: 'http://localhost:3000/api/users/5ec2e045b381d610c7c802a1',
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated === false) {
      this.props.history.push('/');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  async componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push('/');
    }

    let accessString = localStorage.getItem('JWT');
    if (accessString === null) {
      this.setState({
        isLoading: false,
        error: true,
      });
    }

    let self = this;

    await axios
      .get('http://localhost:3000/api/users/findUser', {
        headers: { Authorization: `JWT ${accessString}` },
      })
      .then(response => {
        self.setState({
          id: response.data.id,
          isLoading: false,
          error: false,
        });
      })
      .catch(error => {
        console.log(error.data);
      });
  }

  render() {
    return (
      <>
        {/* <input type="submit" value="edit" onClick={this.onClick} />
        <View />
        <EditNow /> */}
        <Container>
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
                    style={{ padding: '20px', borderRadius: '25px' }}
                    // Image by <a href="https://pixabay.com/users/WandererCreative-855399/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Stephanie Edwards</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Pixabay</a>
                  />
                </div>

                <Form.Group>
                  <Form.Label>Email</Form.Label> <span>{this.state.email}</span>
                  {/* <Button>Edit</Button> */}
                  <Form.Control
                    type="text"
                    name="email"
                    id="email"
                    value={this.state.email}
                    placeholder="Enter email"
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
                    placeholder="Enter name"
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
                    placeholder="Enter age"
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
                    placeholder="Enter weight"
                    onChange={this.changeValueHandler}
                  />
                </Form.Group>

                <Button type="submit" variant="success" className="mb-5" block>
                  Update profile
                </Button>
              </Form>
            </div>
          </Col>
        </Container>
      </>
    );
  }
}

Profile.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Profile);
