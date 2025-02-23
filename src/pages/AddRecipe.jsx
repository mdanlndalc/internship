/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipes";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    measurements: "",
    cookingTime: "",
    image: "",
    details: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { ...recipe, id: recipes.length + 1 };
    recipes.push(newRecipe);
    navigate("/");
  };

  return (
    <div className="p-10 text-center bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
        <input type="text" name="name" placeholder="Recipe Name" value={recipe.name} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
        <textarea name="ingredients" placeholder="Ingredients" value={recipe.ingredients} onChange={handleChange} className="w-full p-2 border rounded mb-4" required></textarea>
        <input type="text" name="measurements" placeholder="Measurements" value={recipe.measurements} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
        <input type="text" name="cookingTime" placeholder="Cooking Time" value={recipe.cookingTime} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
        <input type="text" name="image" placeholder="Image URL" value={recipe.image} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
        <textarea name="details" placeholder="More Details" value={recipe.details} onChange={handleChange} className="w-full p-2 border rounded mb-4" required></textarea>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipes";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    measurements: "",
    cookingTime: "",
    image: "",
    details: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { ...recipe, id: recipes.length + 1 };
    recipes.push(newRecipe);
    navigate("/");
  };

  return (
    <div className="p-10 text-center min-h-screen bg-gradient-to-r from-green-200 to-green-100">
      <h1 className="text-4xl font-extrabold mb-6 text-green-700">Create a Delicious Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl">
        <input 
          type="text" name="name" placeholder="Recipe Name" value={recipe.name} onChange={handleChange}
          className="w-full p-3 border border-green-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500" required 
        />
        <textarea 
          name="ingredients" placeholder="Ingredients" value={recipe.ingredients} onChange={handleChange}
          className="w-full p-3 border border-green-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500" required
        ></textarea>
        <input 
          type="text" name="measurements" placeholder="Measurements" value={recipe.measurements} onChange={handleChange}
          className="w-full p-3 border border-green-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500" required 
        />
        <input 
          type="text" name="cookingTime" placeholder="Cooking Time" value={recipe.cookingTime} onChange={handleChange}
          className="w-full p-3 border border-green-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500" required 
        />
        <input 
          type="text" name="image" placeholder="Image URL" value={recipe.image} onChange={handleChange}
          className="w-full p-3 border border-green-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500" required 
        />
        <textarea 
          name="details" placeholder="More Details" value={recipe.details} onChange={handleChange}
          className="w-full p-3 border border-green-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500" required
        ></textarea>
        <button type="submit" className="p-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg w-full transition-all">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
