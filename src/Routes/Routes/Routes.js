import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Course from "../../Pages/Course/Course";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SideNav from "../../Pages/SideNav/SideNav";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <Course></Course>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            }
        ]
    }
])