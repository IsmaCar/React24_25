import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleLogin = () => {

        localStorage.setItem('token', JSON.stringify("hola mundo"));
        navigate('/Dashboard');
    }
  return (
    <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Bienvenido a la página de inicio</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
        onClick={handleLogin}
        >Iniciar sesión
        </button>
    </div>
  )
}

export default Home