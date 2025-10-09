import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Installation from '../Pages/Installation';
import AllApps from '../Pages/AllApps';
import AppDetails from '../Pages/AppDetails';
import AppsError from '../Pages/AppsError';
import Loader from '../components/Loader';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        hydrateFallbackElement: <Loader/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/all-apps',
                // errorElement: <AppsError></AppsError>,
                Component: AllApps
            },
            {
                path: '/installation',
                Component: Installation
            },
            {
                path: '/app/:id',
                Component: AppDetails,
                errorElement: <AppsError></AppsError>,

            },
        ]
    },


])

export default router;