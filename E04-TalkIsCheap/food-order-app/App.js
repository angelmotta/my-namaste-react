import React from "react";
import ReactDOM from "react-dom/client";
import baositosLogo from "./assets/baositos_logo.jpeg";
import rollitosPic from "./assets/rollitos_primavera.jpeg";

const DishCard = () => (
    <div className="dish-card">
        <div className="pic-container">
            <img className="pic-dish" src={rollitosPic} />
        </div>
        <div className="dish-description">
            <h3>Rollitos primevera</h3>
            <p>Ingredientes y comentarios</p>
        </div>
        <div>
            <b>S/15</b>
        </div>
    </div>
);

const Body = () => (
    <div className="body">
        <div className="search-container">Search Bar</div>
        <div className="dishes-container">
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
        </div>
    </div>
);

const Header = () => (
    <div className="header">
        <div className="logo">
            <img src={baositosLogo}></img>
            <div>Baositos</div>
        </div>
        <div className="navbar">
            <ul>
                <li>Nosotros</li>
                <li>La carta</li>
                <li>Pedidos</li>
            </ul>
        </div>
    </div>
);

const MainApp = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);
