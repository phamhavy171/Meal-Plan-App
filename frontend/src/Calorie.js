import React, { Component } from "react";

class Calorie extends Component {
  constructor(props) {
    super(props);
    this.getCalo = this.getCalo.bind(this);
    this.getQuery = this.getQuery.bind(this);
  }
  state = {
    loading: true,
    recipe: null,
  };

  async componentDidMount() {
    const APP_ID = "c2e839f8";
    const APP_KEY = "296e9f8d43e419f596b74385a4d1940e";
    const query = "chicken";
    const calorieRange = "200-300";
    const healthLabel = "alcohol-free";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=${calorieRange}&health=${healthLabel}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState({ recipe: data.hits[1], loading: false });
  }
  async getCalo(e) {
    const caloRange = e.target.value;
    const url = `https://api.edamam.com/search?q=beef&app_id=c2e839f8&app_key=296e9f8d43e419f596b74385a4d1940e&from=0&to=3&calories=${caloRange}&health=alcohol-free`;

    const response = await fetch(url);

    const data = await response.json();

    this.setState({ recipe: data.hits[0], loading: false });
  }
  getQuery(e) {
    this.setState({ value: e.target.value });
    alert("you have chosen" + this.state.value);
  }
  render() {
    console.log(this.state.recipe);
    const calo = () => {
      var x = this.state.recipe.recipe.calories;
      return Math.floor(x);
    };

    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.getQuery}
          />
          <input type="button" value="200-300" onClick={this.getCalo} />
          <input type="button" value="300-500" onClick={this.getCalo} />
          <input type="button" value="500-800" onClick={this.getCalo} />
          <input type="button" value="800-1200" onClick={this.getCalo} />
          <input type="submit" value="Submit" />
        </form>

        {this.state.loading || !this.state.recipe ? (
          <div>Loading...</div>
        ) : (
          <div>
            {this.state.recipe.recipe.label} <br />
            <img
              src={this.state.recipe.recipe.image}
              alt={this.state.recipe.recipe.label}
            ></img>
            <br />
            <p>
              Total: {calo()} kcal for {""}
              {this.state.recipe.recipe.yield} servings
            </p>
            <p> {calo() / this.state.recipe.recipe.yield} kcal per serving</p>
            <br />
            <button type="button">
              <a
                href={this.state.recipe.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get recipe now!
              </a>
            </button>
            <br />
          </div>
        )}
      </div>
    );
  }
}

export default Calorie;
