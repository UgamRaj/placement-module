import { createContext, useContext, useState } from "react";
import allAccommodation from "../../property.json";
const LikedContext = createContext({});

export const useMyContext = () => {
  return useContext(LikedContext);
};

const MyContext = ({ children }) => {
  const [allAccom, setAllAccom] = useState(allAccommodation);
  const [liked, setLiked] = useState([]);

  const onUpdatedLiked = (id) => {
    console.log("onUpdatedLiked", id);
    const isAlreadyLiked = liked.some((item) => item.id === id);

    if (isAlreadyLiked) {
      // Remove the item from liked if it's already present
      setLiked(liked.filter((item) => item.id !== id));
    } else {
      const requiredAccommodation = allAccommodation.find(
        (acc) => acc.id === id
      );
      //   console.log(
      //     "🚀 ~ onUpdatedLiked ~ requiredAccommodation:",
      //     requiredAccommodation
      //   );

      setLiked([...liked, requiredAccommodation]);
    }
  };

  const onDeletedLiked = (id) => {
    console.log("onDeletedLiked");
  };

  const MyContextObj = {
    liked,
    setLiked,
    onUpdatedLiked,
    onDeletedLiked,
    allAccom,
    setAllAccom,
    allAccommodation,
  };

  return (
    <LikedContext.Provider value={MyContextObj}>
      {children}
    </LikedContext.Provider>
  );
};

export default MyContext;
