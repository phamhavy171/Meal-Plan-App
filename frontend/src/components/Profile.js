import React, { Component } from 'react';
import Avatar from 'react-avatar-edit';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Profile extends Component {
  constructor(props) {
    super(props);
    const src = '../example.jpg';
    this.state = {
      preview: null,
      src,
    };

    this.onCrop = this.onCrop.bind(this);

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  state = {
    name: '',
    age: '',
    weight: '',
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Container className="mt-5">
        <div>
          <Avatar
            width={250}
            height={250}
            onCrop={this.onCrop}
            onClose={this.onClose}
            src={this.state.src}
          />
          <img src={this.state.preview} alt="Preview" />
        </div>

        <Col md={{ span: 8, offset: 2 }}>
          <Form>
            <Form.Group>
              <Form.Label>
                Name<p>{this.state.name}</p>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                onChange={this.changeHandler}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Age<p>{this.state.age}</p>
              </Form.Label>
              <Form.Control
                type="number"
                name="age"
                id="age"
                placeholder="Enter age"
                onChange={this.changeHandler}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Weight (optional)<p>{this.state.weight}</p>
              </Form.Label>
              <Form.Control
                type="number"
                name="weight"
                id="weight"
                placeholder="Enter weight"
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Button type="submit" className="mb-5">
              Save
            </Button>
          </Form>
          <h2>Recipe History</h2>
        </Col>
      </Container>
    );
  }
}

// const Profile = () => {
//   return (
//     <Container className="mt-5">
//       <Col md={{ span: 8, offset: 2 }}>
//         <Form>
//           <Form.Group>
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Enter name"

//               // onChange={this.onNameChange.bind(this)}
//             />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>Age</Form.Label>
//             <Form.Control
//               type="number"
//               name="age"
//               id="age"
//               placeholder="Enter age"

//               // onChange={this.onNameChange.bind(this)}
//             />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>Weight</Form.Label>
//             <Form.Control
//               type="number"
//               name="weight"
//               id="weight"
//               placeholder="Enter weight"

//               // onChange={this.onNameChange.bind(this)}
//             />
//           </Form.Group>

//           <Button type="submit" className="mb-5">
//             Save
//           </Button>
//         </Form>
//         <h2>Recipe History</h2>
//       </Col>
//     </Container>
//   );
// };

export default Profile;
