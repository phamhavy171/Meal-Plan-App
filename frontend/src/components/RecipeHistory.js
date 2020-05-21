import React, { Component } from 'react';
import SavedRecipe from './SavedRecipe.js';

import Container from 'react-bootstrap/Container';

const recipeData = [
  {
    id: 1,
    title: 'Homemade Potato Bread ',
    url: '//www.simplyrecipes.com/recipes/homemade_potato_bread/',
  },
  {
    id: 2,
    title: 'Baked Potato Shakshuka',
    url: '//www.thekitchn.com/recipe-baked-potato-shakshuka-226864',
  },
  {
    id: 3,
    title: 'Potato Stack (Scalloped Potatoes)',
    url: '//food52.com/recipes/33143-potato-stack-scalloped-potatoes',
  },
  {
    id: 4,
    title: 'Dinner Tonight: Frittata with Corn, Scalliion, And Potato',
    url:
      '//www.seriouseats.com/recipes/2008/08/frittata-with-corn-scallion-and-potato-recipe.html',
  },
  {
    id: 5,
    title: 'Buttermilk Potato Bread',
    url: '//honestcooking.com/buttermilk-potato-bread/',
  },
  {
    id: 6,
    title: 'Sweet Potato & Chipotle Mash',
    url: '//www.bbcgoodfood.com/recipes/sweet-potato-chipotle-mash',
  },
  {
    id: 7,
    title: 'Potato Bread',
    url: '//www.cookstr.com/recipes/potato-bread-james-beard',
  },
  {
    id: 8,
    title: 'Potato And Egg Tarts',
    url:
      '//sevenspoons.net/blog/2007/4/9/easter-parade-portraits-of-a-long-weekend-part-two.html',
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
        <h2 style={{ color: 'green', padding: '20px 0', textAlign: 'center' }}>Recipe History</h2>
        {recipeList}
      </Container>
    );
  }
}
export default RecipeHistory;
