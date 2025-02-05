import { Link, useNavigate } from "react-router-dom"

const RootLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isAuth = localStorage.removeItem('token');
    navigate('/');
  }

  const isAuth = localStorage.getItem('token') !== null;

  return (
    <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex space-x-4">
                <Link to="/" className="flex items-center">
                  Home
                </Link>
                
                <Link to="/profile" className="flex items-center">
                  Profile
                </Link> 
                
                <Link to="/dashboard" className="flex items-center">
                  Dashboard
                </Link>   
                </div>
                {isAuth && (
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800"
                  onClick={handleLogout}
                  >Cerrar sesión</button>
                )}
              </div>
            </div>
          </nav>
          <main className="max-w-6xl mx-auto mt-8 px-4 py-4">

          </main>
    </div>
  )
}

export default RootLayout