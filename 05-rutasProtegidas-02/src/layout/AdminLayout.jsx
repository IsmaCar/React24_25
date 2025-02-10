import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminLayout = () => {
  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
  }


  return (
    <div className='fllex h-screen'>
      <div className='lg:hidden'>
        <button>

        </button>
      </div>
      <div>
        <aside className='fixed lg:static w-64 bg-gray-800 h-full hidden lg:block transform transition-transform flex flex-col'>
          <nav className='flex-1 p-4 space-y-2'>
            <NavLink to="/admin" className="block p-2 text-white hover:text-yellow-300">
            DashBoard
            </NavLink>
            <NavLink to="/admin/users" className="block p-2 text-white hover:text-yellow-300">
            Users
            </NavLink>
            <NavLink to="/admin/products" className="block p-2 text-white hover:text-yellow-300">
            Products
            </NavLink>
            <NavLink to="/admin/settings" className="block p-2 text-white hover:text-yellow-300">
            Settings
            </NavLink>
          </nav>
          <div className='p-4 border-gray-700'>
            <button className='w-full bg-red-500 text-white p-2 rounded hover:bg-red-900'
                    onClick={handleLogout}>
              Logout
            </button>
          </div>
        </aside>
      </div>
      <main className='flex-l p-6 overflow-auto'>
        <Outlet/>
      </main>
    </div>

  )
}

export default AdminLayout