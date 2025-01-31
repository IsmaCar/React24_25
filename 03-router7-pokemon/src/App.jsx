import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { PokemonProvider } from "./context/PokemonContext";
import { Toaster } from "sonner";

function App() {
//Cuando usemos react-router-dom App solo debe tener el ROUTER PROVIDER
//El resto debe estar en RootLayout
  return (
    <PokemonProvider>
      <Toaster position="top-right" richColors={2000}/>
      <RouterProvider router={router}/>
    </PokemonProvider>
  )
}

export default App
