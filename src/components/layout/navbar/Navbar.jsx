import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="containerNav">
      <Link to="/">
        <img
          src="/src\components\assets\img\ethereal-logo-blanco.png"
          alt="Logo Ethereal"
          width={280}
          className="logo"
        />
      </Link>
      <div className="navBox">
        <ul className="menuNav" id="sinPuntos">
          <Link to="/" className="menuItem">
            productos
          </Link>
          <Link to="/category/mesas-de-comedor" className="menuItem">
            mesas de comedor
          </Link>
          <Link to="/category/mesas-de-centro" className="menuItem">
            mesas de centro
          </Link>
          <CartWidget />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
