import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/spoti_logo.png";
import searchIcon from "./assets/search-icon.png";
import userIcon from "./assets/user_icon.png";

const HeaderComponent = () => (
    <>
        <header className="header">
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
            <div className="center">
                <button type="submit">
                    <img src={searchIcon} alt="search" />
                </button>
                <input
                    className="inputSearch"
                    type="text"
                    placeholder="Song, artists, albums"
                />
            </div>
            <div className="right">
                <a href="#" className="userDiv">
                    <img src={userIcon} alt="user icon" />
                </a>
            </div>
        </header>
    </>
);

const rootElem = document.getElementById("root");
const root = ReactDOM.createRoot(rootElem);
root.render(<HeaderComponent />);
