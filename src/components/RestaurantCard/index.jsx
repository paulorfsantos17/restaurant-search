import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Address, Restaurant, RestaurantInfo, Title, RestaurantPhoto} from './styles'
import restaurant  from '../../assets/restaurante-fake.png'

export const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do Restaurante</Title>
        <ReactStars count={5} isHalf activeColor='#e7711c' edit={false} value={4}/>
        <Address>Rua Rio de Janeiro, 120</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurant} alt="" />
    </Restaurant>
  )
}
