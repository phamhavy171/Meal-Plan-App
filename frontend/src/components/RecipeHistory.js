import React, { Component } from 'react';
import SavedRecipe from './SavedRecipe.js';

import Container from 'react-bootstrap/Container';

const recipeData = [
  {
    id: 1,
    title: 'Recipe name',
    url: '',
  },
  {
    id: 2,
    title: 'Recipe name',
    url: '',
  },
  {
    id: 3,
    title: 'Recipe name',
    url: '',
  },
  {
    id: 4,
    title: 'Recipe name',
    url: '',
  },
  {
    id: 5,
    title: 'Recipe name',
    url: '',
  },
  {
    id: 6,
    title: 'Recipe name',
    url: '',
  },
  {
    id: 7,
    title: 'Recipe name',
    url: '',
  },
  {
    id: 8,
    title: 'Recipe name',
    url: '',
  },
];

class RecipeHistory extends Component {
  state = {
    recipeData: recipeData,
  };
  render() {
    const recipeList = this.state.recipeData.map((recipe, index) => {
      return (
        <SavedRecipe
          key={recipe.id}
          title={recipe.title}
          number={index + 1}
          url={recipe.url}
        />
      );
    });

    return (
      <Container>
        <h2 style={{ color: 'green', padding: '20px 0' }}>Recipe History</h2>
        {recipeList}
      </Container>
    );
  }
}
export default RecipeHistory;
