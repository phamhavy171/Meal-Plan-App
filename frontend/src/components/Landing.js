import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import jwt_decode from "jwt-decode";
import setAuthToken from "../setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authentication";
import { decode } from "jsonwebtoken";

import ContactForm from "./ContactForm";
import MainNav from "./MainNav";
import Login from "./Login";
import Signup from "./Signup";
import Filter from "./Filter";
import HomePage from "./HomePage";
import About from "./About";
import Profile from "./Profile";
import "./Landing.css";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decode.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class Landing extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <MainNav />
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/form" component={ContactForm}></Route>
            <Route path="/filter" component={Filter}></Route>
            <Route path="/profile" component={Profile}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Landing;
