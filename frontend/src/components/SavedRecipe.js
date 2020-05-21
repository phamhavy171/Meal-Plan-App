import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SavedRecipe = props => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <Row style={{ padding: '10px' }}>
        <Col>
          <h5>
            <Badge variant="success" style={{ marginRight: '5px' }}>
              {props.number}
            </Badge>
            <a href={props.url} style={{ color: 'black' }}>
              {props.title}
            </a>
          </h5>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default SavedRecipe;
