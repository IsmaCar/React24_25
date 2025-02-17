import { createContext, useContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {

    const [ favorites, setFavorites] = useState(() =>{
        const storedFavorites = localStorage.getItem('moviesFavorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    })

    const addToFavorite = (movie) => {
        if(favorites.some(mov => mov.id === movie.id)) {
            console.log('La pelicula ya está en favoritos');
        }else{ 
            setFavorites((prevFavorites) => [...prevFavorites, movie])
        }

    }

    useEffect(() =>{
        localStorage.setItem('moviesFavorites', JSON.stringify(favorites))
    },[favorites])

    const removeFromFavorite = (movieId) => {
        const updateFavorites = setFavorites((prevFavorites) => prevFavorites.filter(movie => movie?.id !== movieId))
        return localStorage.setItem('moviesFavorites', JSON.stringify(updateFavorites))
    }

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorite, removeFromFavorite }}>
            { children }
        </FavoriteContext.Provider>
    )
}

export const useMovie = () => {
    const context = useContext(FavoriteContext);
    if(context === undefined)
        throw new Error("useMovie debe estar dentro del proveedor PeliculaProvider");
    
    return context
}