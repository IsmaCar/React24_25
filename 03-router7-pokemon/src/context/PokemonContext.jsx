import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    //hook
    const [favorites, setFavorites] = useState([])

    const addToFavorite = (pokemon) => {
        if(favorites.some(poke => poke.id === pokemon.id)){
            return;
        }
        setFavorites((prevFavoritos)=>[...prevFavoritos, pokemon])
    }

    const removeFromFavorite = (pokemonId) => {
        setFavorites(favorites.filter(pokemon => pokemon.id !== pokemonId)) 
    }
    //funcionalidades del provider

    return (
        <PokemonContext.Provider value={{addToFavorite, removeFromFavorite}}>
            {children}
        </PokemonContext.Provider>
    )
}

//Me creo un hook personalizado para cargar el contexto
export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if(context === undefined)
        throw new Error("usePokemon deber estar dentro del proveedor PokemonProvider");
        
    return context;
} 

//Para usar el contexto haciamos: 
//const context = useContext(PokemonContext);
