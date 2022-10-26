import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import Details from "../../Pages/Details/Details";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import SideNav from "../../Pages/SideNav/SideNav";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('http://localhost:5000/courses'),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')

            },
            {
                path: '/',
                element: <SideNav />,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/courses',
                element:
                    <PrivateRoutes>
                        <Course></Course>
                    </PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/blog',
                element:
                    <PrivateRoutes>
                        <Blog></Blog>
                    </PrivateRoutes>

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
                path: '/profile',
                element: <Profile></Profile>,
            },

        ]
    }
])