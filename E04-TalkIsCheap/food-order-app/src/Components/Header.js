import baositosLogo from "../../assets/baositos_logo.jpeg";
import { useState } from "react";

const Header = () => {
    const [isLoged, setIsLoged] = useState(false);
    let btnName = isLoged ? "Logout" : "Login";
    return (
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
                    <button
                        className="btn-login"
                        onClick={() => setIsLoged(!isLoged)}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
