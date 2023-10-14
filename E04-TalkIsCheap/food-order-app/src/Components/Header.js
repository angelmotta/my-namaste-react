import baositosLogo from "../../assets/baositos_logo.jpeg";

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

export default Header;
