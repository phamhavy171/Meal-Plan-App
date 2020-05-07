import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import Login from "./Login";
import Signup from "./Signup";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Landing() {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Meal Plan</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/form">Contact us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Log in</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">Sign up</Link>
            </Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
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
