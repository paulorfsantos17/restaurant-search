import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import restaurantImgDefault from "../../assets/restaurante-fake.png";
import {
  Address,
  Restaurant,
  RestaurantInfo,
  Title,
  RestaurantPhoto,
} from "./styles";

export const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageloaded] = useState(false);

  useEffect(()=>  {
    
  }, [imageLoaded])
  
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          activeColor="#e7711c"
          edit={false}
          value={restaurant.rating}
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      {restaurant ? (
        <RestaurantPhoto
          imageLoaded={imageLoaded}
          src={
            restaurant.photos
              ? restaurant.photos[0].getUrl()
              : restaurantImgDefault
          }
          onLoad={() => setImageloaded(true)}
          alt="Restaurante sem photo"
        />
      ) : null}
      {!imageLoaded ? <Skeleton width={"100px"} height={"100px"} /> : null}
    </Restaurant>
  );
};
