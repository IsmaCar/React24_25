import { createContext, useContext, useState } from "react";
import { toast } from "sonner"

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    //hook
    const [favorites, setFavorites] = useState([])

    const addToFavorite = (pokemon) => {
        if (favorites.some(poke => poke.id === pokemon.id)) {
            toast.error("El pokemon ya está en favoritos", {
                style: {
                    background: "red",
                    color: "white",
                    border: "2px solid red"
                }
            })
        }
        setFavorites((prevFavoritos) => [...prevFavoritos, pokemon])
        toast.success("El pokemon se ha añadido a favoritos", {
            style: {
                background: "#d1fae5",
                color: "black",
                border: "2px solid green"
            }
        })
        
    }


const removeFromFavorite = (pokemonId) => {
    setFavorites((prevFavoritos) => prevFavoritos.filter(pokemon => pokemon?.id !== pokemonId))
    toast.succes("El pokemon se borro de favoritos", {
        style: {
            background: "#d1fae5",
            color: "black",
            border: "2px solid green"
        }
    })
}
//funcionalidades del provider

return (
    <PokemonContext.Provider value={{ favorites, addToFavorite, removeFromFavorite }}>
        {children}
    </PokemonContext.Provider>
)

}
//Me creo un hook personalizado para cargar el contexto
export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (context === undefined)
        throw new Error("usePokemon deber estar dentro del proveedor PokemonProvider");

    return context;
}

//Para usar el contexto haciamos:
//const context = useContext(PokemonContext);
