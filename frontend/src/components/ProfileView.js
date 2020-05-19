import React from 'react';

const View = props => {
  return (
    <div>
      <p>
        name <span>{props.name}</span>
      </p>
      <p>
        email <span>{props.email}</span>
      </p>
      <p>
        age <span>{props.age}</span>
      </p>
      <p>
        weight <span>{props.weight}</span>
      </p>
    </div>
  );
};

export default View;
