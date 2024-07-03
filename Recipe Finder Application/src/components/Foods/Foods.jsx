import { useEffect, useState } from "react";
import axios from "axios";
import FoodItem from "../FoodCard/FoodItem";
// import RecipeIndex from "./RecipeIndex";
import "./Foods.css";
import Loader from "../Loader/Loader";
import { useRecipeContext } from "../Context/RecipeContext";
import LikeButton from "../LikeButton/LikeButton";

const Foods = () => {
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const getFoodApi = async () => {
    try {
      const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
      const res = await axios.get(URL);
      // console.log(res.data.meals);
      setItem(res.data.meals);

      setShow(true);
    } catch (error) {
      console.log(error);
      setShow(true);
    }
  };

  useEffect(() => {
    getFoodApi();
  }, []);

  // useEffect(() => {
  //   // getFoodApi();
  // }, []);
  // const setIndex = (alpha) => {
  //   setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  // };
  const searchRecipe = () => {
    // console.log(search);
    // getFoodApi();
    if (!search) {
      return;
    }
    const searchKey = search.toLowerCase();
    const results = item.filter(
      (recipe) =>
        recipe.strMeal.toLowerCase().includes(searchKey) ||
        recipe.strCategory.toLowerCase().includes(searchKey) ||
        recipe.strArea.toLowerCase().includes(searchKey) ||
        recipe.strInstructions.toLowerCase().includes(searchKey)
    );
    console.log("🚀 ~ searchRecipe ~ results:", results);

    setItem(results);
  };

  // if (evt.key === "Enter") {
  //   setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  // }

  return (
    <div>
      <>
        <div className="foodmain">
          <div className="foodheading ">
            <h1> Search Your Food Recipe</h1>
          </div>
          <div className="foodSearchAndLikeContainer">
            <div className="foodsearchBox ">
              <input
                value={search}
                type="search"
                placeholder="Search Your Food here"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="" onClick={searchRecipe}>
                Search
              </button>
            </div>
            <LikeButton />
          </div>
          <div className="container">
            {show ? <FoodItem data={item} /> : <Loader />}
          </div>
          <div className="indexContainer"></div>
        </div>
      </>
    </div>
  );
};

export default Foods;
