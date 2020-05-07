import React from 'react';

const Recipe = ( { title, calories, image, ingredients, url, healthLabels }) => {
  return (
    <div >
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt={title} />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{url}</p>
      <ul>
        {healthLabels.map((healthLabel) =>
          <li>{healthLabel}</li>)}
      </ul>
    </div>
  );
}

export default Recipe;

