import React from 'react'
import {Address, Restaurant, RestaurantInfo, Title} from './styles'

export const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do Restaurante</Title>
        <p>Avaliação</p>
        <Address>Rua Rio de Janeiro, 120</Address>
      </RestaurantInfo>
    </Restaurant>
  )
}
