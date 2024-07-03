import { createContext, useContext, useState } from "react";
const FoodContext = createContext({});

export const useRecipeContext = () => {
  return useContext(FoodContext);
};

const RecipeContext = ({ children }) => {
  const [likedFood, setLikedFood] = useState([]);
  const [fav, setFav] = useState(false);

  const onGetLikedFood = () => {
    return JSON.parse(localStorage.getItem("likedMeals")) || [];
  };

  const onUpdatedLiked = (meal, isTrue) => {
    if (isTrue) {
      console.log("🚀 ~ onUpdatedLiked ~ meal:", meal);

      const likedMeals = JSON.parse(localStorage.getItem("likedMeals")) || [];

      const existingMeal = likedMeals.find(
        (existing) => existing.idMeal === meal.idMeal
      );

      if (!existingMeal) {
        likedMeals.push(meal);
        localStorage.setItem("likedMeals", JSON.stringify(likedMeals));
        console.log(
          " ~ onUpdatedLiked ~ Meal added to likedMeals:",
          likedMeals
        );
      } else {
        console.log(" ~ onUpdatedLiked ~ Meal already exists:", existingMeal);
      }
    } else {
      const likedMeals = JSON.parse(localStorage.getItem("likedMeals")) || [];

      const updated = likedMeals.filter(
        (existing) => existing.idMeal !== meal.idMeal
      );
      localStorage.setItem("likedMeals", JSON.stringify(updated));
    }
    onGetLikedFood();
  };

  const RecipeContextObj = {
    likedFood,
    setLikedFood,
    onUpdatedLiked,
    onGetLikedFood,
    setFav,
    fav,
  };

  return (
    <FoodContext.Provider value={RecipeContextObj}>
      {children}
    </FoodContext.Provider>
  );
};

export default RecipeContext;
