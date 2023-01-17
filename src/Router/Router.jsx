import { useRoutes } from "react-router-dom";
import Song from "../component/Home/Song";
import Auth from "../Layouts/Auth";
import Default from "../Layouts/Default";
import Home from "../view/Home";
import Login from "../view/Login";
import Register from "../view/Register";
import Search from "../view/Search";

function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Default />,
            children: [
                {
                    index: true,
                    element: <Home />
                }, {
                    path: '/home',

                    element: <Home />
                },
                {
                    path: '/search',
                    element: <Search />
                }
                ,
                {
                    path: '/song/:id',
                    element: <Song />
                }
            ]

        },
        {
            path: '/',
            element: <Auth />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/register',
                    element: <Register />
                }
                ,
                {
                    path: '/login',
                    element: <Login />
                }
            ]
        }

    ])
    return routes
}
export default Router