import React, { useState } from "react";

import { Search } from "@mui/icons-material";

import { InputAdornment, Skeleton, TextField } from "@mui/material";

import { useSelector } from "react-redux";

import {
  Container,
  SearchAside,
  Logo,
  Wrapper,
  Map,
  CarrouselTitle,
  Carrousel,
  ModalTitle,
  ModalContent,
} from "./style";
import logo from "../../assets/logo.svg";
import restaurantImgDefault from "../../assets/restaurante-fake.png";

import ImageCard from "../../components/ImageCard";
import { RestaurantCard } from "../../components/RestaurantCard";
import { Modal } from "../../components/Modal";
import SimpleMap from "../../components/Map";
import { Loader } from "../../components/Loader";


export const Home = () => {
  const [inputValue, setInputValue] = useState();
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState(null);
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants
  );
  const [placeId, setPlaceId] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <SearchAside>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            onKeyUp={handleKeyPress}
            onChange={(e) => setInputValue(e.target.value)}
            label="Pesquisar Restaurantes"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          ></TextField>
          {restaurants.length > 0 ? (
            <>
              <CarrouselTitle>Na sua área</CarrouselTitle>
              <Carrousel {...settings}>
                {restaurants.map((restaurant) => {
                  return (
                    <ImageCard
                      key={restaurant.place_id}
                      image={
                        restaurant.photos
                          ? restaurant.photos[0].getUrl()
                          : restaurantImgDefault
                      }
                      nameRestaurant={restaurant.name}
                    />
                  );
                })}
              </Carrousel>
            </>
          ) : (
            <Loader />
          )}
        </SearchAside>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            restaurant={restaurant}
            key={restaurant.place_id}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />
        ))}
      </Container>
      <Map>
        <SimpleMap query={query} placeId={placeId} />
      </Map>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>
              {restaurantSelected?.formatted_phone_number}
            </ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.opening_hours?.open_now
                ? "Está aberto agora!"
                : "Fechado neste momento!"}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width={"100%"} height={"10px"} />
            <Skeleton width={"100%"} height={"10px"} />
            <Skeleton width={"100%"} height={"10px"} />
            <Skeleton width={"100%"} height={"10px"} />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};
