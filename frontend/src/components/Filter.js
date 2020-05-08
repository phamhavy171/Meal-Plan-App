import React from "react";
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.getQuery = this.getQuery.bind(this);
    this.getCalo = this.getCalo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    loading: true,
    recipe: null,
  };

  getQuery(e) {
    this.setState({ value: e.target.value });
  }
  getCalo(e) {
    this.setState({ name: e.target.name });
  }

  async handleSubmit(e) {
    const query = this.state.value;
    const caloRange = this.state.name;
    const APP_ID = "c2e839f8";
    const APP_KEY = "296e9f8d43e419f596b74385a4d1940e";
    e.preventDefault();
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=${caloRange}&health=alcohol-free`;

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipe: data.hits[0], loading: false });
    console.log(this.state);
  }
  render() {
    const reci = this.state.recipe;
    const calo = () => {
      var x = reci.recipe.calories;
      return Math.floor(x);
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            KeyWord:
            <input
              type="text"
              value={this.state.value}
              onChange={this.getQuery}
              required
            />
          </label>{" "}
          <br />
          <p>Choose calorie input:</p>
          <input
            type="button"
            value="200-300"
            name="200-300"
            onClick={this.getCalo}
          />
          <input
            type="button"
            value="300-500"
            name="300-500"
            onClick={this.getCalo}
          />
          <input
            type="button"
            value="500-800"
            name="500-800"
            onClick={this.getCalo}
          />
          <input
            type="button"
            value="800-1200"
            name="800-1200"
            onClick={this.getCalo}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        {this.state.loading || !reci ? (
          <div>Edit input to get recipes! </div>
        ) : (
          <div>
            <h1>{reci.recipe.label}</h1>
            <br />
            <img src={reci.recipe.image} alt={reci.recipe.label}></img>
            <br />
            <p>
              Total: {calo()} kcal for {""}
              {reci.recipe.yield} servings
            </p>
            <p> {calo() / reci.recipe.yield} kcal per serving</p>
            <br />
            <button type="button">
              <a
                href={reci.recipe.url}
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

export default Filter;
