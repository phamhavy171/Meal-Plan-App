import React, { useState } from "react";
export default ({ changeToFalse }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <div onClick={() => changeToFalse()}>Go back</div>
      <input
        value="First Name"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        value="Last Name"
        onChange={(event) => setLastName(event.target.value)}
      />
      <button>Submit</button>
    </div>
  );
};
