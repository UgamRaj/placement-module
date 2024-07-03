import { useNavigate } from "react-router-dom";
// import FoodItemData from "./food.json";
// import PopupCard from "../PopupCard/PopupCard";
import { useEffect, useState } from "react";
import "./FoodCard.css";
import { FaHeart } from "react-icons/fa";
import { useRecipeContext } from "../Context/RecipeContext";

const FoodItem = ({ data, isLike = false }) => {
  // console.log("🚀 ~ FoodItem ~ data:", data);

  const navigate = useNavigate();

  // const [items, setItems] = useState(data);
  // console.log(navigate);
  // const [isPopupVisible, setPopupVisible] = useState(false);
  const { fav, setFav, onUpdatedLiked, onGetLikedFood } = useRecipeContext();

  const handleLiked = (item) => {
    // onUpdatedLiked(id);
    if (fav) {
      setFav(false);
      onUpdatedLiked(item, false);
    } else {
      setFav(true);
      onUpdatedLiked(item, true);
    }
  };

  const likedItemOrNot = (idMeal) => {
    const likedMeals = onGetLikedFood();

    if (likedMeals.length !== 0) {
      const isLiked = likedMeals.find((item) => item.idMeal === idMeal);
      return isLiked !== undefined;
    }
    return false;
  };

  // useEffect(() => {
  //   // setItems()
  // }, []);

  // const handleQuickViewClick = () => {
  //   setPopupVisible(true);
  // };

  // const handleClosePopup = () => {
  //   setPopupVisible(false);
  // };

  return (
    <>
      <div className="foodItemMain">
        {data?.map(
          ({ strMeal, strMealThumb, strArea, idMeal, strCategory }) => {
            return (
              <div className="foodContainer" key={idMeal}>
                {/* <div className="quickView" onClick={handleQuickViewClick}> */}
                <img src={strMealThumb} alt="meal" />
                <h3>{strMeal}</h3>
                <div className="foodDetails">
                  <p>Category: {strCategory}</p>
                  <button onClick={() => navigate(`/liked/${idMeal}`)}>
                    More Info
                  </button>
                </div>

                <div className="likeDiv">
                  <h4>Country : {strArea}</h4>
                  <FaHeart
                    onClick={() =>
                      handleLiked({
                        strMeal,
                        strMealThumb,
                        strArea,
                        idMeal,
                        strCategory,
                      })
                    }
                    style={{
                      color: likedItemOrNot(idMeal) || isLike ? "red" : "white",
                    }}
                  />
                </div>

                {/* {isPopupVisible && (
                  <PopupCard handleClosePopup={handleClosePopup} />
                )} */}
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default FoodItem;
