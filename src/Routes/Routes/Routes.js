import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import Details from "../../Pages/Details/Details";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Premium from "../../Pages/Premium/Premium";
import Register from "../../Pages/Register/Register";
import SideNav from "../../Pages/SideNav/SideNav";
import TramsAndCondition from "../../Pages/TramsAndCondition/TramsAndCondition";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://skillshareacademy-server.vercel.app/courses'),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://skillshareacademy-server.vercel.app/courses')

            },
            {
                path: '/',
                element: <SideNav />,
                loader: () => fetch('https://skillshareacademy-server.vercel.app/courses')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://skillshareacademy-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/premium/:id',
                element:
                    <PrivateRoutes>
                        <Premium></Premium>
                    </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://skillshareacademy-server.vercel.app/courses/${params.id}`)

            },
            {
                path: '/courses',
                element:
                    <PrivateRoutes>
                        <Course></Course>
                    </PrivateRoutes>,
                loader: () => fetch('https://skillshareacademy-server.vercel.app/courses')
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
            },

            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register/trams',
                element: <TramsAndCondition></TramsAndCondition>
            },
        ]
    }
])