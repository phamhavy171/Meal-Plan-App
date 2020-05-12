import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import Login from "./Login";
import Signup from "./Signup";
import Filter from "./Filter";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Landing.css";

export default function Landing() {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>Meal Plan</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/filter" className="nav-link">
                Filter
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/form" className="nav-link">
                Contact us
              </Link>
              <Link to="/login" className="nav-link">
                Log in
              </Link>
              <Link to="/signup" className="nav-link">
                Sign up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/filter">
            <FilterPage />
          </Route>
          <Route path="/form">
            <Contact />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <ContactForm />;
}
function LoginPage() {
  return <Login />;
}
function SignupPage() {
  return <Signup />;
}
function FilterPage() {
  return <Filter />;
}
