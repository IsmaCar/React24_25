import React from 'react';
import { NavLink } from "react-router-dom";
import { ROUTES } from '../routes/paths';

const Navbar = () => {
    /**
     * NavLink se utiliza para movernos entre rutas
     * NavLink añade "active" a className cuando la ruta es la actual
     * isActive --> es una prop de react router dom que me dice si la ruta está activa
     */
  return (
   <nav className='bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg'>

    <div className='container mx-auto flex justify-between items-center'>

        <div className='space-x-4'>
        <NavLink to={ROUTES.HOME} 
        className={({ isActive })=>`text-white hover:text-red-600 ${isActive ? "font-bold":""}`}>
            Inicio App
        </NavLink>
        <NavLink to={ROUTES.SEARCH} className="text-white text-2xl font-bold">
            Buscar Pokemon
        </NavLink>
        <NavLink to={ROUTES.POKEMONDETAIL} className="text-white text-2xl font-bold">
            Detalles
        </NavLink>
        <NavLink to={ROUTES.FAVORITES} className="text-white text-2xl font-bold">
            Pokemons favoritos
        </NavLink>
        </div>

    </div>

   </nav>
  )
}

export default Navbar