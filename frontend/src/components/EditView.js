import React from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const Edit = props => {
  return (
    <Form>
      <div>
        <Form.Group>
          <Form.Label>Email</Form.Label> <span>{props.email}</span>
          <Form.Control
            type="text"
            name="email"
            id="email"
            value={props.email}
            placeholder="Enter email"
            onChange={props.onChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Name</Form.Label> <span>{props.name}</span>
          <Form.Control
            type="text"
            name="name"
            id="name"
            value={props.name}
            placeholder="Enter name"
            onChange={props.onChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label> <span>{props.age}</span>
          <Form.Control
            type="text"
            name="age"
            id="age"
            value={props.age}
            placeholder="Enter age"
            onChange={props.onChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Weight</Form.Label> <span>{props.weight}</span>
          <Form.Control
            type="text"
            name="weight"
            id="weight"
            value={props.weight}
            placeholder="Enter weight"
            onChange={props.onChange}
            required
          />
        </Form.Group>

      </div>
    </Form>
  );
};

export default Edit;
