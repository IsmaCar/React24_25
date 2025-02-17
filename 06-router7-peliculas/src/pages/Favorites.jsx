import React from 'react'
import { useMovie } from '../contexts/FavoritesContext'
import { Link } from 'react-router-dom';
import { getImageURL } from '../services/tmdb';

function Favorites() {
  const { favorites, removeFromFavorite } = useMovie();

  if (favorites.length === 0) {
    return (
      <div className='text-center bg-gray-300 container w-1/2 mx-auto p-6 mt-20 rounded-2xl shadow-2xl'>
        <h1 className='text-3xl font-bold mb-6'>Favoritos</h1>
        <p>No tienes películas en favoritos</p>
        <Link to='/' className='text-xl font-semibold text-orange-500 hover:underline block mt-4'>
          Inicio
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className='text-sky-800 text-3xl font-bold p-6'>Tus películas favoritas</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {favorites.map((movie) => (
          <article key={movie.id} className="card transform transition-transform duration-200 group hover:scale-105 relative">
            <Link to={`/movie/${movie.id}`}>
              <div className="relative aspect-[2/3]">
                <img
                  src={getImageURL(movie.poster_path)}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-black text-white px-2 py-4 rounded-lg">
                  ⭐{Number(movie.vote_average).toFixed(1)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-sky-900 group-hover:text-gray-700">
                  {movie.title}
                </h3>
                <p className="text-sm font-bold text-gray-800 mt-1">
                  {movie.release_date.split("-")[0]}
                </p>
              </div>
            </Link>
            <button
              className='absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-lg font-bold hover:bg-red-900'
              onClick={(event) => {
                event.preventDefault();
                removeFromFavorite(movie.id);
              }}
            >
              🗑️
            </button>
          </article>
        ))}
      </div>
    </>
  );
}

export default Favorites;