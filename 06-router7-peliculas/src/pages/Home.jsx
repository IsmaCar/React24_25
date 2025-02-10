import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { getPopularMovies } from '../services/tmdb'
import  MovieCard  from '../components/MovieCard'

function Home() {
  const [page, setPage] = useState(1)

  const { data, loading, error} = useFetch(()=>getPopularMovies(page),[page])

  if(error){
    return (<div>Error:{error.message}</div>)
  }
  return (
    <div className='space-y-8'>
      <header className='text-center'>
        <h1 className='text-4xl font-bold text-sky-950'>Bienvenido al videoclub</h1>
        <p className='mt-4 text-gray-800'>
          Aquí podrás encontrar las peñículas más pupulares del momento
        </p>
      </header>
      <section>
        <h2 className='text-2xl font-bold text-sky-900'>
        {loading ? (<div>Cargando..</div>) : (
          <>
            <div className='grid grid-cols-2 gap-6 md:grid-cols-3
            lg:grid-cols-4 xl:grid-cols-5'>
              {data?.results?.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </div>
          </>
        )}
        </h2>
      </section>
    </div>
  )
}

export default Home