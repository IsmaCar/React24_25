import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Spinner from '../components/Spinner';

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    if (search.length === 0) {
      setPokemonList([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 600);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
      if (!response.ok) {
        toast.error("Error al buscar los pokemons", {
          style: {
            background: "red",
            color: "white",
            border: "2px solid red"
          }
        });
        return;
      }

      const data = await response.json();
      const filteredPokemon = data.results.filter(pokemon =>
        pokemon.name.includes(search.toLowerCase())
      );

      setPokemonList(filteredPokemon);
    } catch (error) {
      toast.error("Error al buscar los pokemons", {
        style: {
          background: "red",
          color: "white",
          border: "2px solid red"
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePokemonClick = (name) => {
    navigate(`/search/${name.toLowerCase()}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Buscador de Pokemon:</h1>
      <form onSubmit={(e) => e.preventDefault()}
        className='max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg'>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Buscar pokemon'
            className='flex-l p-2 border border-gray-200 rounded-lg focus:outline-rose-500'
          />
        </div>
      </form>

      {pokemonList.length > 0 && (
        <div className="mt-11">
          <h2 className="text-center text-4xl font-semibold mb-4"><b>Resultados:</b></h2>
          <ul className="grid grid-cols-6 space-y-2 text-xl text-center">
            {pokemonList.map((pokemon) => (
              <li
                key={pokemon.name}
                onClick={() => handlePokemonClick(pokemon.name)}
                className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg"
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;