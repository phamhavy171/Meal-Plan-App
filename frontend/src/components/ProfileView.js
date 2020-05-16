import React from "react";

const View = (props) => {
  return (
    <div>
      <h1>My info</h1>
      <div>
        <p>
          First name <span>{props.firstname}</span>
        </p>
        <p>
          Last name <span>{props.lastname}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
