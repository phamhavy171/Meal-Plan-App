import React from 'react';

//React bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state);
    fetch('http://localhost:5000/send', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          alert('Message Sent.');
          this.resetForm();
        } else if (response.status === 'fail') {
          alert('Message failed to send.');
        }
      });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
      <Container>
        <Col md={{ span: 8, offset: 2 }}>
          <h2
            style={{ 'text-align': 'center', padding: '20px', color: 'green' }}
          >
            Send us a message
          </h2>
          <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter name"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </Form.Group>

            <Form.Group controlId="textarea">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Container>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactForm;
