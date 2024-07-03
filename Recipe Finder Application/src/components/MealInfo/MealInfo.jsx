import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MealInfo.css";
import { FaHeart } from "react-icons/fa";
import { useRecipeContext } from "../Context/RecipeContext";

const MealInfo = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const [like, setLike] = useState(false);
  // const [fav, setFav] = useState(false);
  const { onUpdatedLiked, onGetLikedFood } = useRecipeContext();

  const handleLiked = () => {
    if (like) {
      // setFav(false);
      onUpdatedLiked(item, false);
    } else {
      // setFav(true);
      onUpdatedLiked(item, true);
    }
  };

  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        // console.log(response.data);
        const data = response.data.meals[0];
        const likedMeals = onGetLikedFood();
        if (likedMeals.length !== 0) {
          const isLiked = likedMeals.filter(
            (item) => item.idMeal === data.idMeal
          );
          if (isLiked.length !== 0) {
            setLike(true);
          } else {
            setLike(false);
          }
        }

        setItem(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id !== "") {
      fetchData();
    }
  }, [id]);

  return (
    <>
      {item && (
        <>
          <div className="mealInfoContainer">
            <div className="mealInfoTop">
              <h1 className="mealInfoTitle">{item.strMeal}</h1>
              <div className="mealInfoLiked">
                <h2>{item.strArea} Food</h2>
                <FaHeart
                  onClick={() => handleLiked()}
                  style={{ color: like ? "red" : "white" }}
                  title="Liked"
                />
              </div>
              <h3>{item.strCategory}</h3>
            </div>
            <div className="mailInfoMiddle">
              <div className="mailInfoMiddleImage">
                <img src={item.strMealThumb} alt={item.strMeal} />
              </div>
              <div className="mailInfoMiddleRight">
                <div className="mailInfoMiddleRightContainer">
                  <h2>Ingredients</h2>
                  <h4>
                    {item.strIngredient1}: {item.strMeasure1}
                  </h4>
                  <h4>
                    {item.strIngredient2}: {item.strMeasure2}
                  </h4>

                  <h4
                    style={{
                      display: `${!item.strIngredient3 ? "none" : "block"}`,
                    }}
                  >
                    {item.strIngredient3}: {item.strMeasure3}
                  </h4>
                  <h4
                    style={{
                      display: `${!item.strIngredient4 ? "none" : "block"}`,
                    }}
                  >
                    {item.strIngredient4}: {item.strMeasure4}
                  </h4>
                  <h4
                    style={{
                      display: `${!item.strIngredient5 ? "none" : "block"}`,
                    }}
                  >
                    {item.strIngredient5}: {item.strMeasure5}
                  </h4>
                  <h4
                    style={{
                      display: `${!item.strIngredient6 ? "none" : "block"}`,
                    }}
                  >
                    {item.strIngredient6}: {item.strMeasure6}
                  </h4>
                  <h4
                    style={{
                      display: `${!item.strIngredient7 ? "none" : "block"}`,
                    }}
                  >
                    {item.strIngredient7}: {item.strMeasure7}
                  </h4>
                  <h4
                    style={{
                      display: `${!item.strIngredient8 ? "none" : "block"}`,
                    }}
                  >
                    {item.strIngredient8}: {item.strMeasure8}
                  </h4>
                  <h4
                    className="mailInfoMiddleRightContainerBottom"
                    style={{
                      display: `${!item.strIngredient9 ? "none" : "block"}`,
                    }}
                  >
                    {item.strIngredient9}: {item.strMeasure9}
                  </h4>
                  <a className="mailInfoBtn" href={item.strSource}>
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mealIntoInstructions">
            <h2>INSTRUCTIONS</h2>
            <h4>{item.strInstructions}</h4>
          </div>
        </>
      )}
    </>
  );
};

export default MealInfo;
