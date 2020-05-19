import React from 'react';

const Edit = (props) => {
  return (
    <div className="form">
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" id="name"
            onChange={props.onChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" email="email" id="email"
            onChange={props.onChange} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="age" age="age" id="age"
            onChange={props.onChange} />
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input type="weight" weight="weight" id="weight"
            onChange={props.onChange} />
        </div>
      </form>
    </div>
  );
}

export default Edit;
