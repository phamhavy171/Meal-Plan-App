import React, { Component } from "react";
import Edit from "./EditProfile";
import View from "./ProfileView";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    firstname: "",
    lastname: "",
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Edit onChange={this.changeHandler} />

        <View firstname={this.state.firstname} lastname={this.state.lastname} />
      </div>
    );
  }
}

export default Profile;
