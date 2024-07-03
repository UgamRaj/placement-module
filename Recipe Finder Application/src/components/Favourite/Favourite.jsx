import { useState } from "react";
import "./Favourite.css";
import FoodItem from "../FoodCard/FoodItem";
import { useRecipeContext } from "../Context/RecipeContext";

const Favourite = () => {
  const { onGetLikedFood } = useRecipeContext();
  const [likedMeals] = useState(onGetLikedFood());

  return (
    <>
      <div className="likedContainerTitle">
        <h1>Your Favourite Food</h1>
      </div>
      <div className="container">
        <FoodItem data={likedMeals} isLike={true} />
      </div>
    </>
  );
};

export default Favourite;
