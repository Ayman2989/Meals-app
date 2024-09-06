import React, { useContext } from "react";
import { MealsContext } from "./context";

function Favorites() {
  const { favs, delFav, setModalIsOpen, setModalMeal } =
    useContext(MealsContext);

  const removeFav = (mealId) => {
    delFav(mealId);
  };

  const displayModal = (meal) => {
    setModalIsOpen(true);
    setModalMeal(meal);
  };
  return (
    <div
      className={`flex justify-center my-4 ${
        favs.length !== 0 ? "bg-gray-300" : "bg-gray-100"
      } p-2`}
    >
      <div className="flex space-x-4">
        {favs.map((fav) => (
          <div key={fav.idMeal} className="relative flex flex-col">
            <img
              onClick={() => displayModal(fav)}
              src={fav.strMealThumb}
              className="w-12 h-12 rounded-full border-2 border-gray-300 transform transition duration-300 hover:scale-105 cursor-pointer"
            />
            <button
              className="hover:scale-125 text-sm transform transition ease-in-out duration-300"
              onClick={() => removeFav(fav.idMeal)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
