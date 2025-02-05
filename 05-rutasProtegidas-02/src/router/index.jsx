import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { ErrorPage } from '../pages/ErrorPage';
import { Login } from '../pages/Login';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { AdminLayout } from '../layouts/AdminLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'admin',
                element: 
                <ProtectedRoute>
                    <AdminLayout />
                </ProtectedRoute>,
            }
        ]
    }
]);