import React, { useState } from 'react';

import Slider from 'react-slick';

import { Search } from '@mui/icons-material';

import { InputAdornment, TextField } from '@mui/material';

import { Container, SearchAside, Logo, Wrapper, Map, CarrouselTitle } from './style';
import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png'

import ImageCard from '../../components/ImageCard'
import { RestaurantCard } from '../../components/RestaurantCard';



export const Home = () => {
  const [inputValue, setInputValue] = useState();

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    adaptiveHeight: true
  };

  return (
    <Wrapper>
    <Container>
      <SearchAside>
        <Logo src={logo} alt="Logo do restaurante" />
        <TextField label="Pesquisar Restaurantes" variant="outlined" InputProps={{endAdornment:(
          <InputAdornment position='end'>
            <Search />
          </InputAdornment>
        )}}>
        </TextField>
        <CarrouselTitle>
          Na sua área
        </CarrouselTitle>
        <Slider {...settings}>
          <ImageCard image={restaurant} nameRestaurant="nome do restaurante"/>
          <ImageCard image={restaurant} nameRestaurant="nome do restaurante"/>
          <ImageCard image={restaurant} nameRestaurant="nome do restaurante"/>
          <ImageCard image={restaurant} nameRestaurant="nome do restaurante"/>
        </Slider>
      </SearchAside>
      <RestaurantCard />
    </Container>
    <Map />
    </Wrapper>
  );
};
