import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Catagory from "../../Pages/Catagory/Catagory";
import Course from "../../Pages/Course/Course";
import Home from "../../Pages/Home/Home";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>
            },
            {
                path: '/course/:id',
                element: <Course />
            },

        ]
    }
])