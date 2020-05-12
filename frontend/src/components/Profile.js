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
    const src = '../blank-profile-picture-973460_640.png';
    this.state = {
      src,
      id: '',
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

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    axios.post('http://localhost:3001/users/').then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <Container className="mt-5">
        <Col md={{ span: 8, offset: 2 }}>
          <div>{this.state.id}            
            <Form>
            <div className="mb-5">
                <Image
                  width={170}
                  height={170}
                  src={this.state.src}
                  roundedCircle
                  // Image by <a href="https://pixabay.com/users/WandererCreative-855399/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Stephanie Edwards</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Pixabay</a>
                  style={{ display: "grid", justifyItems: "center", alignItems: "center" }}
              />
            </div>
              <Form.Group style={{ position: "relative"}}>
                <Button style={{ position: "absolute", right: "0", top: "-10px"}}>edit</Button>
                <Form.Label>
                  Name:
                </Form.Label>
                <p style={{borderBottom: "1px dotted black"}}>{this.state.name}</p>
                {/* <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                  required
                /> */}
              </Form.Group>

              <Form.Group style={{ position: "relative"}}>
                <Button style={{ position: "absolute", right: "0", top: "-10px"}}>edit</Button>
                <Form.Label>
                  Age:
                </Form.Label>
                <p style={{borderBottom: "1px dotted black"}}>{this.state.age}</p>
                {/* <Form.Control
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter age"
                  value={this.state.age}
                  onChange={this.onAgeChange.bind(this)}
                  required
                /> */}
              </Form.Group>

              <Form.Group style={{ position: "relative"}}>
                <Button style={{ position: "absolute", right: "0", top: "-10px"}}>edit</Button>
                <Form.Label>
                  Weight (optional):
                </Form.Label>
                <p style={{borderBottom: "1px dotted black"}}>{this.state.weight}</p>
                {/* <Form.Control
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="Enter weight"
                  value={this.state.weight}
                  onChange={this.onWeightChange.bind(this)}
                /> */}
              </Form.Group>

              <Button type="submit" className="mb-5" onClick={this.handleSubmit.bind(this)} method="POST">
                Save
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
