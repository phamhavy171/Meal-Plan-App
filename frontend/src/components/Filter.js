import React from "react";
import Recipe from "./Recipe";
import "./Filter.css";

const APP_ID = "c2e839f8";
const APP_KEY = "296e9f8d43e419f596b74385a4d1940e";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
      query: "",
      diet: "",
      health: "",
    };

    this.getRecipes = this.getRecipes.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.getDiet = this.getDiet.bind(this);
    this.getHealth = this.getHealth.bind(this);
    this.getCalo = this.getCalo.bind(this);
  }

  getUrl() {
    const caloRange = this.state.name;
    if (this.state.diet === "" && this.state.health === "") {
      return `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=8&calories=${caloRange}`;
    }

    if (this.state.diet === "") {
      return `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=8&calories=${caloRange}&health=${this.state.health}`;
    }

    if (this.state.health === "") {
      return `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=8&calories=${caloRange}&diet=${this.state.diet}`;
    }

    return `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=8&calories=${caloRange}&health=${this.state.health}&diet=${this.state.diet}`;
  }

  getRecipes(e) {
    e.preventDefault();
    const scope = this;
    fetch(this.getUrl())
      .then((resp) => resp.json())
      .then((data) => {
        scope.setState({
          recipes: data.hits,
        });
        if (data.hits.length === 0) {
          alert("Oops, no recipes found according to your search requirements");
        }
        console.log(data.hits);
      })

      .catch((err) => {
        console.log(
          `An error has occurred while fetching data from Edamam ${err}`
        );
        alert("Please choose calorie range");
      });
  }

  getDiet(e) {
    this.setState({
      diet: e.target.value,
    });
  }

  getQuery(e) {
    this.setState({
      query: e.target.value,
    });
  }

  getHealth(e) {
    this.setState({
      health: e.target.value,
    });
  }
  getCalo(e) {
    this.setState({ name: e.target.name });
  }

  render() {
    return (
      <div>
        <div className="filter">
          <h1>Search for recipes</h1>
          <form onSubmit={this.getRecipes} className="search-form">
            <label>
              Key ingredient:
              <input
                className="filter-input"
                type="text"
                value={this.state.query}
                onChange={this.getQuery}
                placeholder="Search for something"
                required
              />
            </label>
            <br />
            <br />
            <label>Choose calorie input (kcal):</label>
            <input
              className="filter-input calo"
              type="button"
              value="200-300"
              name="200-300"
              onClick={this.getCalo}
            />
            <input
              className="filter-input calo"
              type="button"
              value="300-500"
              name="300-500"
              onClick={this.getCalo}
            />
            <input
              className="filter-input calo"
              type="button"
              value="500-800"
              name="500-800"
              onClick={this.getCalo}
            />
            <input
              className="filter-input calo"
              type="button"
              value="800-1200"
              name="800-1200"
              onClick={this.getCalo}
            />{" "}
            <br />
            <br />
            <label>
              Diet:
              <select
                className="filter-input"
                value={this.state.diet}
                onChange={this.getDiet}
                required
              >
                <option value="none"></option>
                <option value="balanced">Balanced</option>
                <option value="high-protein">High-Protein</option>
                <option value="low-carb">Low-Carb</option>
                <option value="low-fat">Low-Fat</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              Allergies:
              <select
                className="filter-input"
                value={this.state.health}
                onChange={this.getHealth}
                required
              >
                <option value="none"></option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="peanut-free">Peanut-Free</option>
                <option value="true-nut-free">Tree-Nut-Free</option>
                <option value="alcohol-free">Alcohol-Free</option>
                <option value="sugar-conscious">Sugar-Conscious</option>
              </select>
            </label>
            <br />
            <button className="search-button" type="submit">
              Filter
            </button>
          </form>
        </div>
        <div className="recipes">
          {this.state.recipes
            ? this.state.recipes.map((recipe) => (
                <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  healthLabels={recipe.recipe.healthLabels}
                  yield={recipe.recipe.yield}
                  url={recipe.recipe.url}
                  serving={recipe.recipe.yield}
                />
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default Filter;
