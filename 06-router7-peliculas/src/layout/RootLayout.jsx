import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='min-h-screen bg-gray-100'>
        <nav className='bg-sky-950 text-white shadow-lg'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between h-16'>
                    <NavLink to='/' className='text-xl font-bold p-4'>
                        Videoclub
                    </NavLink>
                </div>
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