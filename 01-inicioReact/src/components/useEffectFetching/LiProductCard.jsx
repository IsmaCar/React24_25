
const LiProductCard = (props) => {
  const { product, index } = props;
    
  return (
    <li key={index} className="bg-gray-300 shadow-lg rounded-lg p-6 flex flex-col">
      <span className="text-2xl text-blue-500 font-medium font-semibold">
      {product.title} 
      </span>
      <span className="text-1xl text-green-600">
      Precio: {product.price}
      </span>
      <button className="bg-slate-600 hover:bg-slate-900 px-4 py-2 rounded-lg text-white">Quitar del carrito</button>
    </li>
  )
}

export default LiProductCard