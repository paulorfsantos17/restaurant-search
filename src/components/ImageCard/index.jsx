import React from 'react'
import { Card, Title } from './styles'

const ImageCard = ({image, nameRestaurant}) => {
  return (
    <Card photo={image}>
      <Title>
        {nameRestaurant}
      </Title>
    </Card>
  )
}

export default ImageCard
