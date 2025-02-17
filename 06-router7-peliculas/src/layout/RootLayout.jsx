import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='min-h-screen bg-gray-100'>
        <nav className='bg-sky-950 text-white shadow-lg'>
            <div className='flex justify-baseline max-w-7xl mx-auto px-4'>
                <div className='flex justify-between h-16'>
                    <NavLink to='/' className='text-xl font-bold p-4 mr-5'>
                        Videoclub
                    </NavLink>
                </div>
                <NavLink to='favorites' className=' font-bold text-white hover:text-orange-300 p-4.5 ml-7'>
                    Favoritas
                </NavLink>
                <NavLink to='search' className='font-bold text-white hover:text-orange-300 p-4.5 ml-7'>
                    Búsqueda
                </NavLink>
            </div>
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default RootLayout