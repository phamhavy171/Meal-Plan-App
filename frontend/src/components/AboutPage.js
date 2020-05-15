import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faSearch,
  faBookOpen,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons";

import "./About.css";

const About = () => {
  return (
    <Container fluid="xs" id="about">
      <Container className="aboutContainer" id="aboutAppContainer">
        <h2>About Meal Plan App</h2>
        <p>
          This app was created to promote better and healthier eating habits.
          Meal Plan App is for anyone who is looking for easy way to find new
          recipes according to their preferences. By signing up, you can create
          a profile and view your recipe history. You can search recipes also
          without signing in.
        </p>
      </Container>
      <Container className="aboutContainer" id="howItWorksContainer">
        <h2> How It Works</h2>
        <CardDeck>
          <Card className="aboutCard">
            <Card.Body>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: "30px", marginBottom: "15px" }}
              />
              <Card.Title>Choose Filters</Card.Title>
              <Card.Text>
                Search recipes by selecting ingredient, calories, diet and
                health labels.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="aboutCard">
            <Card.Body>
              <FontAwesomeIcon
                icon={faBookOpen}
                style={{ fontSize: "30px", marginBottom: "15px" }}
              />
              <Card.Title>Pick Recipe</Card.Title>
              <Card.Text> Choose one recipe that you like.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="aboutCard">
            <Card.Body>
              <FontAwesomeIcon
                icon={faCarrot}
                style={{ fontSize: "30px", marginBottom: "15px" }}
              />
              <Card.Title>Cook</Card.Title>
              <Card.Text>Cook your meal following the recipe.</Card.Text>
            </Card.Body>
          </Card>

          <Card className="aboutCard">
            <Card.Body>
              <FontAwesomeIcon
                icon={faUtensils}
                style={{ fontSize: "30px", marginBottom: "15px" }}
              />
              <Card.Title>Eat and Repeat</Card.Title>
              <Card.Text> Enjoy your meal and welcome back!</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <Link to="/filter">
          <Button variant="success">Get started</Button>
        </Link>
      </Container>
      <Container className="aboutContainer" id="aboutUsContainer">
        <h2>About Us</h2>
        <p>About Us text coming here ...</p>
      </Container>
    </Container>
  );
};

export default About;
