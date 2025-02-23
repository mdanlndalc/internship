/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import recipes from "../data/recipes";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredRecipes(recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
    ));
  };

  return (
    <div className="p-10 text-center bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Recipe Platform</h1>
      <input 
        type="text" 
        placeholder="Search recipes..." 
        value={search} 
        onChange={handleSearch} 
        className="p-2 border rounded w-1/2 mb-4"
      />
      <Link to="/add-recipe">
        <button className="ml-4 p-2 bg-blue-500 text-white rounded">Add New Recipe</button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg p-4 shadow-lg">
            <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-2">{recipe.name}</h2>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 mt-2 inline-block">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
*/
/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import recipes from "../data/recipes";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredRecipes(recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
    ));
  };

  return (
    <div className="p-10 text-center min-h-screen bg-gradient-to-r from-pink-100 to-orange-100">
      <h1 className="text-5xl font-extrabold mb-6 text-pink-700">World Flavors 🍽️</h1>
      
      <div className="flex justify-center gap-4 mb-6">
        <input 
          type="text" 
          placeholder="Search recipes..." 
          value={search} 
          onChange={handleSearch} 
          className="p-3 border border-orange-400 rounded-lg w-1/2 focus:ring-2 focus:ring-orange-500"
        />
        <Link to="/add-recipe">
          <button className="p-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition-all">
            + Add Recipe
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white border border-orange-300 rounded-xl p-5 shadow-lg transition-transform transform hover:scale-105">
            <img src={recipe.image} alt={recipe.name} className="w-full h-44 object-cover rounded-lg" />
            <h2 className="text-2xl font-bold mt-3 text-orange-700">{recipe.name}</h2>
            <p className="text-sm text-gray-600">{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-orange-500 mt-3 inline-block font-medium hover:underline">
              View Recipe →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import recipes from "../data/recipes";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>Recipe Platform</h1>
      <input 
        type="text" 
        placeholder="Search recipes..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "50%", marginBottom: "20px" }}
      />
      <Link to="/add-recipe">
        <button style={{ marginLeft: "10px", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Add New Recipe
        </button>
      </Link>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <img src={recipe.image} alt={recipe.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "5px" }} />
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} style={{ display: "inline-block", marginTop: "10px", color: "#007bff", textDecoration: "none" }}>
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
