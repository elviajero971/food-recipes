import React,{useState, useEffect} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "862ffc74";
  const APP_KEY = "1849e4e115890640230571513ce6285f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div className="App">
      <h1>What do you wanna eat today ??</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe
              title={recipe.recipe.label}
              diet={recipe.recipe.dietLabels}
              healthlabel={recipe.recipe.healthLabels} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              nbServings={recipe.recipe.yield}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
