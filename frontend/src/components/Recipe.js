import React from "react";

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
    <div>
      <h3>{title}</h3>
      <p>
        Total amount of calories is {calo()} for {servings()} servings.
      </p>
      <p>Amount of calories per serving is: {caloPerSer()}</p>
      <img src={image} alt={title} />
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
      <button style={{ background: "green", color: "white" }}>
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
      </button>
    </div>
  );
};

export default Recipe;
