import { useState } from "react"
import Hijo from "./components/parametros/Hijo"
import Padre from "./components/parametros/Padre"

const initialStateInfo = {nombre: "Ismael", edad: 24, isAdmin: "false"}
const App = () => {
  const [info, setInfo] = useState(initialStateInfo)
  const handleClickEdad = () => {
    setInfo((prevInfo) => ({ ...prevInfo, edad: prevInfo.edad + 1 }));
  };
  return (
    <>
    
    <p>El nombre es: {info.nombre}</p>
    <Padre info={ info } setInfo={ setInfo } handleClickEdad={ handleClickEdad }>
      <Hijo info={ info } handleClickEdad={ handleClickEdad }/>
    </Padre>
    </>
  )
}

export default App