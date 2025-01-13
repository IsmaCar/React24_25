
let Padre = (props) => {
  const { info, setInfo, children } = props;

  const handleClick = () => {
    setInfo({...info, nombre:"Pedro"})
  }

  const handleClickEdad = () => {
    setInfo((prevInfo)=>({ ...prevInfo, edad: prevInfo.edad + 1}))
  }

  return (
    <>
    <section>
      <h2>Bienvenido {info.nombre}</h2>
      <p>Edad: {info.edad}</p>
      {info.edad > 18 && <p>Eres mayor de edad</p>}
      {info.eddad < 18 && <p>Eres menor de edad</p>}
      {info.isAdmin && (<p>Es administrador</p>)}
      <div>
        <button onClick={handleClick}>Modificar</button>
        <br></br>
        <button onClick={handleClickEdad}>Aumentar Edad</button>
      </div>
    </section>
    <section>
      {children}
    </section>
  </>
  )
}

export default Padre