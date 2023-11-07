import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Nosotros from "./Components/Nosotros";
import Error from "./Components/Error";
import Pedidos from "./Components/Pedidos";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restaurants from "./Components/Restaurants";

const MainApp = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
);

const routerApp = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        children: [
            {
                path: "/",
                element: <Restaurants />,
            },
            {
                path: "/menu",
                element: <Body />,
            },
            {
                path: "/nosotros",
                element: <Nosotros />,
            },
            {
                path: "/pedidos",
                element: <Pedidos />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp} />);
