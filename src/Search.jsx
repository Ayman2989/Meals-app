import React, { useContext, useState } from "react";
import { MealsContext } from "./context";

function Search() {
  const { searchQuery, setSearchQuery } = useContext(MealsContext);
  const [mealSearch, setMealSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(mealSearch);
    setMealSearch("");
  };
  return (
    <div className="flex justify-center my-6">
      <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={mealSearch}
          onChange={(e) => {
            setMealSearch(e.target.value);
          }}
          placeholder="Search meals..."
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
        {searchQuery && (
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Show All Meals
          </button>
        )}
      </form>
    </div>
  );
}

export default Search;
