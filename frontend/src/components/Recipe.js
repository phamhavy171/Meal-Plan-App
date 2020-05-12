import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import "./Recipe.css";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  healthLabels,
  url,
  serving,
}) => {
  const calo = () => {
    var x = calories;
    return Math.floor(x);
  };
  const servings = () => {
    var y = serving;
    return Math.floor(y);
  };
  const caloPerSer = () => {
    return Math.floor(calo() / servings());
  };
  return (
    <div
      className="cards"
      style={{
        justifyItems: "center",
      }}
    >
      <Card
        border="light"
        style={{
          maxWidth: "25rem",
          display: "inline-block",
          verticalAlign: "top",
          margin: "30px",
          alignItems: "center",
        }}
      >
        <Card.Header>
          <h4
            style={{
              color: "green",
              textAlign: "center",
            }}
          >
            {title}
          </h4>
        </Card.Header>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Text>
            Total amount of calories is {calo()} for {servings()} servings.
            Amount of calories per serving is: {caloPerSer()} (kcal).
            <h5>Ingredients:</h5>
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ul>
            <h5>Health labels:</h5>
            <div>
              {healthLabels.map((healthLabel) => (
                <div>{healthLabel}</div>
              ))}
            </div>
          </Card.Text>
          <Button variant="success">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Get recipe now!
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipe;
