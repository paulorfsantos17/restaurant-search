import React, { useState } from "react";

import Slider from "react-slick";

import { Search } from "@mui/icons-material";

import { InputAdornment, TextField } from "@mui/material";



import {
  Container,
  SearchAside,
  Logo,
  Wrapper,
  Map,
  CarrouselTitle,
} from "./style";
import logo from "../../assets/logo.svg";
import restaurant from "../../assets/restaurante-fake.png";

import  ImageCard  from "../../components/ImageCard";
import { RestaurantCard } from "../../components/RestaurantCard";
import { Modal } from "../../components/Modal";
import SimpleMap from '../../components/Map'

export const Home = () => {
  const [inputValue, setInputValue] = useState();
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery]= useState(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress (e) {
    if(e.key === 'Enter') {
      setQuery(inputValue)
      
    }
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
          <CarrouselTitle>Na sua área</CarrouselTitle>
          <Slider {...settings}>
            <ImageCard
              image={restaurant}
              nameRestaurant="nome do restaurante"
            />
            <ImageCard
              image={restaurant}
              nameRestaurant="nome do restaurante"
            />
            <ImageCard
              image={restaurant}
              nameRestaurant="nome do restaurante"
            />
            <ImageCard
              image={restaurant}
              nameRestaurant="nome do restaurante"
            />
          </Slider>
          <button onClick={()=> setModalOpened(true)}>Abrir modal</button>
        </SearchAside>
        <RestaurantCard />
      </Container>
      <Map>
        <SimpleMap query={query}/>
      </Map>
      <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)}/>
    </Wrapper>
  );
};
