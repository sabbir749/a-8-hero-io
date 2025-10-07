import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Installation from '../Pages/Installation';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installation',
                Component: Installation
            }
        ]
    },


])

export default router;