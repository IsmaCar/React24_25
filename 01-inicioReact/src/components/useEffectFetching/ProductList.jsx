import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard";
import LiProductCard from "./LiProductCard";

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalCarrito, setTotalCarrito] = useState(0);

    useEffect(() => {
        fetchProduct();
    }, [])

    const totalCart = (carrito) => setTotalCarrito(carrito.reduce((acc, product)=> acc + product.price,0))
    
    useEffect(() => {
        totalCart(cart)
    }, [cart])

    const removeCart = (productId) => {
        setCart((prevCart)=> prevCart.filter((item) => item.id !== productId))
    }

    const fetchProduct = async () => {
        try {
            const response = await fetch("http://localhost:5173/src/data/db.json")

            if (!response.ok)
                throw new Error("Error al recuperar la data");

            setProducts(await response.json())

        } catch (error) {
            console.log("Error Fetching", error);
        }
    }

    const addCart = (product) => {
        setCart((prevCart) => [...prevCart, product])
    }
    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-semibold text-center mb-6">Lista de Libros</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} addCart={addCart} />

                    ))
                }
            </div>

            <div className="mt-10">
                <h2>Carrito de la compra</h2>
                <p className="text-xl font-semibold text-center mb-6">
                    {totalCarrito}
                </p>
                {
                    cart.length === 0 ? <p>Carrito vacío</p> : (
                        <ul>
                            {
                                cart.map((product, index) =>
                                    <li key={index}>
                                        <LiProductCard product={product} index={index} removeCart={removeCart}/>
                                    </li>)
                            }
                        </ul>
                    )
                }

                {/* Si el carrito no está vacío, renderizo con UL los libros del carrito */}

            </div>
        </div>
    )
}
