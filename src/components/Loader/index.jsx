import React from "react";
import Lottie from "lottie-react";
import restaurantLoad from "../../assets/restaurants-loading.json";

export const Loader = () => {
  return (
    <Lottie
      animationData={restaurantLoad}
      autoPlay={true}
      loop={true}
      rendererSettings={{ preserveAspectRatio: true }}
    />
  );
};
