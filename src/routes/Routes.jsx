import { useRoutes } from "react-router-dom"

import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Service from "../pages/Service"


export const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/service',
            element: <Service />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ])
}
