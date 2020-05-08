import React, { Component } from 'react';
import Recipe from './Recipe';

const APP_ID = 'dcd2ff3e';
const APP_KEY = '34c2380ac6cb8b04f580a3e848986ecd';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: null,
			query: '',
			diet: '',
			health: '',
		};

		this.getRecipes = this.getRecipes.bind(this);
		this.getUrl = this.getUrl.bind(this);
		this.getQuery = this.getQuery.bind(this);
		this.getDiet = this.getDiet.bind(this);
		this.getHealth = this.getHealth.bind(this);
	}

	getUrl() {
		if (this.state.diet === '' && this.state.health === '') {
			return `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3`;
		}

		if (this.state.diet === '') {
			return `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&health=${this.state.health}`;
		}

		if (this.state.health === '') {
			return `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&diet=${this.state.diet}`;
		}

		return `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&health=${this.state.health}&diet=${this.state.diet}`;
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
				console.log(data.hits);
			})
			.catch((err) => {
				console.log(
					`An error has occurred while fetching data from Edamam ${err}`
				);
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

	render() {
		return (
			<div className="App">
				<form onSubmit={this.getRecipes} className="search-form">
					<input
						className="search-bar"
						type="text"
						value={this.state.query}
						onChange={this.getQuery}
						placeholder="Search for something"
						required
					/>
					<select value={this.state.diet} onChange={this.getDiet} required>
						<option value="none"></option>
						<option value="balanced">Balanced</option>
						<option value="high-protein">High-Protein</option>
						<option value="low-carb">Low-Carb</option>
						<option value="low-fat">Low-Fat</option>
					</select>
					<select value={this.state.health} onChange={this.getHealth} required>
						<option value="none"></option>
						<option value="vegan">Vegan</option>
						<option value="vegetarian">Vegetarian</option>
						<option value="peanut-free">Peanut-Free</option>
						<option value="true-nut-free">Tree-Nut-Free</option>
						<option value="alcohol-free">Alcohol-Free</option>
						<option value="sugar-conscious">Sugar-Conscious</option>
					</select>
					<button className="search-button" type="submit">
						Search
					</button>
				</form>
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
								/>
						  ))
						: ''}
				</div>
			</div>
		);
	}
}

export default Filter;
