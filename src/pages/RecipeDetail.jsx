/*
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));
  const [selectedSection, setSelectedSection] = useState(null);

  if (!recipe) return <p className="text-center mt-10">Recipe not found!</p>;

  return (
    <div className="p-10 text-center bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button onClick={() => setSelectedSection("ingredients")} className="p-2 bg-blue-500 text-white rounded">Ingredients</button>
        <button onClick={() => setSelectedSection("measurements")} className="p-2 bg-blue-500 text-white rounded">Measurements</button>
        <button onClick={() => setSelectedSection("cookingTime")} className="p-2 bg-blue-500 text-white rounded">Cooking Time</button>
        <button onClick={() => setSelectedSection("image")} className="p-2 bg-blue-500 text-white rounded">Image</button>
        <button onClick={() => setSelectedSection("details")} className="p-2 bg-blue-500 text-white rounded">Additional Details</button>
      </div>
      <div className="mt-4">
        {selectedSection === "ingredients" && <p className="text-lg">{recipe.ingredients}</p>}
        {selectedSection === "measurements" && <p className="text-lg">{recipe.measurements}</p>}
        {selectedSection === "cookingTime" && <p className="text-lg">{recipe.cookingTime}</p>}
        {selectedSection === "image" && <img src={recipe.image} alt={recipe.name} className="rounded-lg w-96 mx-auto" />}
        {selectedSection === "details" && <p className="text-lg">{recipe.details}</p>}
      </div>
    </div>
  );
};
export default RecipeDetail;
*/

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));
  const [selectedSection, setSelectedSection] = useState(null);

  if (!recipe) return <p className="text-center mt-10 text-red-500">Recipe not found!</p>;

  return (
    <div className="p-10 text-center min-h-screen bg-gradient-to-r from-orange-100 to-yellow-50">
      <h1 className="text-4xl font-extrabold mb-6 text-orange-700">{recipe.name}</h1>
      
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        <button onClick={() => setSelectedSection("ingredients")} className="p-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
          Ingredients
        </button>
        <button onClick={() => setSelectedSection("measurements")} className="p-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
          Measurements
        </button>
        <button onClick={() => setSelectedSection("cookingTime")} className="p-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
          Cooking Time
        </button>
        <button onClick={() => setSelectedSection("image")} className="p-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
          Image
        </button>
        <button onClick={() => setSelectedSection("details")} className="p-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
          Additional Details
        </button>
      </div>

      <div className="mt-4 bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        {selectedSection === "ingredients" && <p className="text-lg font-medium text-gray-700">{recipe.ingredients}</p>}
        {selectedSection === "measurements" && <p className="text-lg font-medium text-gray-700">{recipe.measurements}</p>}
        {selectedSection === "cookingTime" && <p className="text-lg font-medium text-gray-700">{recipe.cookingTime}</p>}
        {selectedSection === "image" && <img src={recipe.image} alt={recipe.name} className="rounded-lg w-96 mx-auto shadow-lg" />}
        {selectedSection === "details" && <p className="text-lg font-medium text-gray-700">{recipe.details}</p>}
      </div>
    </div>
  );
};

export default RecipeDetail;
