import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => {
        if(JSON.parse(localStorage.getItem('token')) !== true) {
            setIsAuthenticated(true)
        }
    }

    const logout = () => {
        setIsAuthenticated(false)
        localStorage.removeItem('token')
    }

    return (
    <AuthContext.Provider value= {{ isAuthenticated, login, logout }}>
        {children}
    </AuthContext.Provider>
    )
}
//crear un hook personalizado para exportar el contexto

export const useAuth = () => {
    const context = useContext (AuthContext)
    if(!context) {
        throw new Error("Error en el contexto");
    }
    return context
}