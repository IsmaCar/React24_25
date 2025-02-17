import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    //estado para almacenar la info del usuario logueado
    const [user, setUser] = useState(null)
    //verificar si el usuario está logueado o tengo un token
    const [isLogin, setIsLogin] = useState(false)
    //estoy haciendo fetching 
    const [isLoading, setIsLoading] = useState(true)
    //si hay error en el login
    const [error, setError] = useState(null);

    useEffect(() => {
      checkAuth()
     
    }, [])
    
    //función que verifica el usuario logueado si existe token
    const checkAuth = () => {
        try {
            const token = localStorage.setItem('token')
            if(token){
                //aquí volveré para decodificar el token y hacer uso si es necesario
                //const userInfo = JSON.parse(localStorage.getItem('userInfo'))
                setIsLogin(true)
            }

        } catch (error) {
            console.log('Error al verificar el usuario logueado', error.message);
            setError(error.message)
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
