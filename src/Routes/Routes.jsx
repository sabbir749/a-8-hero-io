import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Installation from '../Pages/Installation';
import AllApps from '../Pages/AllApps';
import AppDetails from '../Pages/AppDetails';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        hydrateFallbackElement: <p>Loading...</p>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch('/appsData.json')
            },
            {
                path: '/all-apps',
                Component: AllApps
            },
            {
                path: '/installation',
                Component: Installation
            },
            {
                path: '/appsDetails',
                Component: AppDetails
            },
        ]
    },


])

export default router;