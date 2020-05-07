import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const SearchPage = () => {
	const APP_ID = 'dcd2ff3e';
	const APP_KEY = '34c2380ac6cb8b04f580a3e848986ecd';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=150&health=alcohol-free`
		);
    const data = await response.json();
    console.log(data.hits);
		setRecipes(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
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
            url={recipe.recipe.url}
            healthLabels={recipe.recipe.healthLabels}
					/>
				))}
			</div>
		</div>
	);
};

export default SearchPage;
