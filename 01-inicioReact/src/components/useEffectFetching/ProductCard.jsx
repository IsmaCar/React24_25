import { Button } from "./Button";

export const ProductCard = (props) => {
    const { product,addCart } = props;

    const handleClick = () => {
        addCart(product)
    }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
        <p className=" text-gray-700 mb-4">Precio: {product.price}</p>
        <Button onClick={handleClick} className="bg-gray-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition">
            Añadir Carrito
        </Button>
        {/* <button onClick={handleClick} className="bg-gray-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition">
            Añadir Carrito
        </button> */}
    </div>
  )
}
