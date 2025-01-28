import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
//Cuando usemos react-router-dom App solo debe tener el ROUTER PROVIDER
//El resto debe estar en RootLayout
  return (
    <PokemonProvider>
      <RouterProvider router={router}/>
    </PokemonProvider>
  )
}

export default App
