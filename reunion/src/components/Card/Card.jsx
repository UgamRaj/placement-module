import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LayersIcon from "@mui/icons-material/Layers";
import { useMyContext } from "../Context/MyContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const Card = ({
  id,
  name,
  address,
  property_image,
  size,
  bath,
  beds,
  price,
  isLiked = false,
  propertyType,
}) => {
  const { onUpdatedLiked } = useMyContext();
  const [fav, setFav] = useState(false);

  const handleLiked = (id) => {
    onUpdatedLiked(id);

    setFav(!isLiked);
  };

  return (
    <div className="cardMain">
      <div className="cardMainImage">
        <img src={property_image} alt="house" />
      </div>
      <div className="cardBodyDetails">
        <div className="cardMainTitle">
          <h3>
            &#8377; {price} <span className="cardRoomPrice">/ day</span>
          </h3>
          {isLiked || fav ? (
            <FavoriteIcon onClick={() => handleLiked(id)} color="error" />
          ) : (
            <FavoriteBorderIcon onClick={() => handleLiked(id)} />
          )}
        </div>
        <div className="cardMainAddress">
          <h3>
            {name} <span className="propertyType">{propertyType}</span>
          </h3>
          <p>{address}</p>
        </div>
        <div className="cardMainSpecification">
          <div className="cardMainSpecificationDetails">
            <BedIcon /> {beds} Beds
          </div>
          <div className="cardMainSpecificationDetails">
            <BathtubIcon /> {bath} Bath
          </div>
          <div className="cardMainSpecificationDetails">
            <LayersIcon /> {size}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
