import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const SearchPage = () => {
	const APP_ID = 'dcd2ff3e';
	const APP_KEY = '34c2380ac6cb8b04f580a3e848986ecd';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');
	const [diet, setDiet] = useState('');

	useEffect(() => {
		getRecipes();
	}, [query, diet]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&health=alcohol-free&diet=${diet}`
		);
		const data = await response.json();
		console.log(data.hits);
		setRecipes(data.hits);
	};

	const updateDiet = (e) => {
		setDiet(e.target.value);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setDiet(diet);
		setSearch('');
		setDiet('');
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={updateSearch}
				/>
				<select value={diet} onChange={updateDiet}>
					<option value="none"></option>
					<option value="Balanced">Balanced</option>
					<option value="High-Fiber">High-Fiber</option>
					<option value="High-Protein">High-Protein</option>
					<option value="Low-Carb">Low-Carb</option>
					<option value="Low-Fat">Low-Fat</option>
					<option value="Low-Sodium"></option>
				</select>
				<button className="search-button" type="submit">
					submit
				</button>
			</form>
			<div className="recipes">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
						healthLabels={recipe.recipe.healthLabels}
					/>
				))}
			</div>
		</div>
	);
};

export default SearchPage;
