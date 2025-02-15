import { createBrowserRouter } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'dashboard',
                element: 
                (
                    <ProtectedRoute>
                        <DashBoard/>
                    </ProtectedRoute>
                )
            }
        ]    
    }
])