import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import Register from '../pages/Register'
import NewProduct from '../pages/NewProduct'

export const router = createBrowserRouter([
    {   
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'products/:id',
                element: <ProductDetail/>
            },
            {
                path: 'products/create',
                element: <ProtectedRouter>
                            <NewProduct action='create'/>
                        </ProtectedRouter>
            },
            {
                path: 'products/:id/edit',
                element: <ProtectedRouter>
                            <UpdateProduct action='edit'/>
                        </ProtectedRouter>
            },
            {
                path: 'products',
                element: <ProtectedRouter>
                            <NewProduct/>
                        </ProtectedRouter>
            },
        ]
    }
])