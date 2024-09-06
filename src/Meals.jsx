import React, { useContext } from "react";
import { MealsContext } from "./context";
import Modal from "./Modal";

function Meals() {
  const {
    meals,
    modalIsOpen,
    setModalIsOpen,
    setModalMeal,
    searchQuery,
    addFav,
  } = useContext(MealsContext);
  const displayModal = (meal) => {
    setModalIsOpen(true);
    setModalMeal(meal);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalMeal(null);
  };

  const filteredMeals = searchQuery
    ? meals.filter(
        (meal) =>
          meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()) ||
          meal.strArea.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : meals;

  const handleToggleFavorite = (meal) => {
    addFav(meal);
  };

  return (
    <div className=" container mx-auto p-4">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMeals.map((meal) => {
          return (
            <div
              key={meal.idMeal}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                onClick={() => displayModal(meal)}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
              />
              <div className=" flex p-4 justify-between items-center ">
                <div className="">
                  <h3 className="text-lg font-semibold mb-2">{meal.strMeal}</h3>
                  <p className="text-gray-600">{meal.strArea}</p>
                </div>
                <button
                  onClick={() => handleToggleFavorite(meal)}
                  className=" p-2 rounded-full bg-gray-300"
                >
                  <span className=" transform transition duration-300 hover:scale-105 cursor-pointer">
                    ⭐
                  </span>
                </button>
              </div>
            </div>
          );
        })}

        {modalIsOpen && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default Meals;
