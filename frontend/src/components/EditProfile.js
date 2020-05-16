import React from "react";

const Edit = (props) => {
  return (
    <div className="form">
      <form>
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={props.onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
