import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div>
        <h2 style={{ "text-align": "center", padding: "20px", color: "green" }}>
          Contact us!
        </h2>
        <Container fluid="sm">
          <div className="Form">
            <Form
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="name">Your name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="exampleInputEmail1">
                    Your email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label htmlFor="message">Your message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  className="form-control"
                  id="message"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </Form.Group>

              <Button
                variant="success"
                type="submit"
                className="btn btn-primary"
              >
                Send
              </Button>
            </Form>
          </div>
        </Container>
      </div>
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
