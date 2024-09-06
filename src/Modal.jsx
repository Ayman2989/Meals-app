import React, { useContext } from "react";
import { MealsContext } from "./context";

function Modal({ closeModal }) {
  const { modalMeal } = useContext(MealsContext);
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">{modalMeal.strMeal}</h2>
        <img
          src={modalMeal.strMealThumb}
          alt={modalMeal.strMeal}
          className="mb-4"
        />
        <div className="flex-1 overflow-auto mb-4">
          <p className="text-sm line-clamp-3">{modalMeal.strInstructions}</p>
        </div>
        <div className="className=" mt-4 flex justify-end>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded "
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
