import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMeal, setModalMeal] = useState({});
  const [searchQuery, setSearchQuery] = useState(null);
  const [favs, setFavs] = useState(() => {
    // Retrieve favorites from local storage, or default to an empty array
    const storedFavs = localStorage.getItem("favoriteMeals");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  const addFav = (meal) => {
    setFavs((currFave) => {
      const updatedFavs = [...currFave, meal];
      // Save to local storage
      localStorage.setItem("favoriteMeals", JSON.stringify(updatedFavs));
      return updatedFavs;
    });
  };
  const delFav = (mealId) => {
    setFavs((currFave) => {
      const updatedFavs = currFave.filter((meal) => meal.idMeal !== mealId);
      localStorage.setItem("favoriteMeals", JSON.stringify(updatedFavs));
      return updatedFavs;
    });
  };

  const fetchMeals = async (url) => {
    try {
      const res = await axios(url);
      setMeals(res.data.meals);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <MealsContext.Provider
      value={{
        meals,
        setMeals,
        modalIsOpen,
        setModalIsOpen,
        modalMeal,
        setModalMeal,
        searchQuery,
        setSearchQuery,
        addFav,
        delFav,
        favs,
        setFavs,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};
