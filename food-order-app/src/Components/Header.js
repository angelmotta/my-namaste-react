import baositosLogo from "../../assets/baositos_logo.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

const Header = () => {
    const [isLoged, setIsLoged] = useState(false);
    let btnName = isLoged ? "Logout" : "Login";
    const netStatus = useNetworkStatus();

    console.log("render Header");
    return (
        <div className="header">
            <Link className="link" to="/">
                <div className="logo">
                    <img src={baositosLogo}></img>
                    <div>Baositos</div>
                </div>
            </Link>
            <div className="navbar">
                <ul>
                    <li>Network status: {netStatus ? "✅" : "❌"}</li>
                    <li>
                        <Link className="link" to="/nosotros">
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/pedidos">
                            Pedidos
                        </Link>
                    </li>
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
