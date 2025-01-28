import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'


const Favorites = () => {
  const { addToFavorite, removeFromFavorite } = useContext(PokemonContext)
  return (
    <div>Favorites</div>
  )
}

export default Favorites