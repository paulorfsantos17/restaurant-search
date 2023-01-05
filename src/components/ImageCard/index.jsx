import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Title } from "./styles";

const ImageCard = ({ image, nameRestaurant }) => {
  const [imageLoader, setImageLoader] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = image;
    imageLoader.onload = () => setImageLoader(true);
  }, [image]);
  return (
    <>
      {imageLoader ? (
        <Card photo={image}>
          <Title>{nameRestaurant}</Title>
        </Card>
      ) : (
        <Skeleton width={"90px"} height={"90px"} />
      )}
    </>
  );
};

export default ImageCard;
