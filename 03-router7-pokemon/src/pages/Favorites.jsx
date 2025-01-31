import React, { useContext } from 'react'
import { usePokemon } from '../context/PokemonContext'
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';


const Favorites = () => {

  const { favorites,removeFromFavorite } = usePokemon();
  
  
  if(favorites.lenght === 0) {
    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-6'>Favoritos</h1>
        <p>
          No tienes pokemons en favoritos, vuelve a inicio y añade alguno.
        </p>
        <Link to={ROUTES.HOME} className='text-blue-500 hover:underline block mt-4'>
          Volver al Inicio
        </Link>
     </div>
    )
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'> Tus pokemons favoritos</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
       {favorites.map((pokemon) => (
        <div key={pokemon.id} className='bg-white rounded-xl p-6 shadow-sm hover:shadow-lg'>
          <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto"
        />
          <h2 className='text-xl capitalize font-semibold text-center mt-4'>
            {pokemon.name}
          </h2>
          <div className='mt-4 space-y-2'>
            <Link to={`${ROUTES.SEARCH}/${pokemon.name}`} 
                  className='block w-full text-center bg-blue-500 text-white px-4 py-2'> 
              Ver detalles
            </Link>
            <button className='w-full bg-orange-400 text-center text-white px-4 py-2'
                    onClick={() => removeFromFavorite(pokemon.id)}>
              eliminar de favoritos
            </button>
          </div>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Favorites