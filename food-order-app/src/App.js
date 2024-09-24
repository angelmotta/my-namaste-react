import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import RestaurantMenu from "./Components/RestaurantMenu";
import Nosotros from "./Components/Nosotros";
import Error from "./Components/Error";
import Pedidos from "./Components/Pedidos";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Components/Body";

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
                element: <Body />,
            },
            {
                path: "/restaurants/:restId",
                element: <RestaurantMenu />,
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
