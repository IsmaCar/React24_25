import React, { useEffect, useState } from 'react'

const Home = () => {
    const[pokemons, setPokemons] = useState([])
    const[loading, setloading] = useState(false)

    useEffect(()=>{
        fetchPokemons()
    })

    const fetchPokemons = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
           
            const data = await response.json();
            //Obtenemos los datos de los pokemons en paralelo
            const pokemonDetails = await Promise.all(
                data.result.map( async (pokemon)=> {
                    const res = await fetch(pokemon.url)
                    return res.json();
                })
            ) 
            setPokemons(pokemonDetails)
        } catch (error) {
            throw new Error("Error", error);
            
        }
        finally {
            setloading(false);
        }
    }

  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-6'>Pokemons Disponibles</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    pokemons.map(pokemon => {
                        <div key={pokemon.id} className='bg-white rounded-xl p-6 hover:shadow-sm'>
                            <div>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            </div>
                        </div>
                    })
                }
            </div>
    </div>
  )
}

export default Home