import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const isAuthenticated = () => {
    //debe devolver true si hay un token guardado en el localStorage
    return localStorage.getItem('token') !==  null;
}

const ProtectedRoute = ({children}) => {
    //debe impedir el acceso al profile a no ser que tenga un token guardado en el localStorage
    //const navigate = useNavigate();
    // if(!isAuthenticated()){
    //     navigate('/');
    //     return null;
    // }

    if(!isAuthenticated()){
        return <Navigate to="/" replace={true}/>
    }
    return children;
}

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout/>,
        children: [
        {
            index:true,
            element: <Home />,
        },
        {
            path: "profile",
            element: 
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>,
        },
        {
            path: "dashboard",
            element: 
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        }
        ]
    }
]);