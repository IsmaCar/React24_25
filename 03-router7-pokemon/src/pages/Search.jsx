import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Spinner from '../components/Spinner';

const Search = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    first
  }, [third])

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);

      if(!response.ok){
        toast.error("Error al buscar el pokemon", {
          style: {
            background: "red",
            color: "white",
            border: "2px solid red"
          }
        })
        return;
      }
      
      const dataPokemon = await response.json();
      //pintar tarjeta con detalles del pokemon o redirijo a la página de detalles pokemon 

      navigate(`/search/${search.toLocaleLowerCase()}`)

      
    } catch (error) {
      toast.error("Error al buscar el pokemon", {
        style: {
          background: "red",
          color: "white",
          border: "2px solid red"
        }
      })
    }finally{
      setIsLoading(false);
    }

  };

  if(isLoading) {
    return(
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
    )
    
  }
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Buscador de Pokemon:</h1>
      <form onSubmit={handleSubmit}
        className='max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg'>
        <div>

          <input type="text"
                 value={search} 
                 onChange={(e) => setSearch(e.target.value)} 
                 placeholder='Buscar pokemon'
                 className='flex-l p-2 border border-gray-200 rounded-lg focus:outline-rose-500'/>
                 
          <button type="submit" className='bg-rose-500 text-white px-4 py-2 rounded hover:bg-slate-900'>Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default Search