import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Nosotros from "./Components/Nosotros";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainApp = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const routerApp = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        errorElement: <Error />,
    },
    {
        path: "/nosotros",
        element: <Nosotros />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp} />);
