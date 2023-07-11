import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="containerNav">
      <Link to="/">
        <img
          src="/src\components\assets\img\logoEthereal.png"
          alt="Logo Ethereal"
          width={160}
        />
      </Link>
      <ul className="menuNav fontEthereal" id="sinPuntos">
        <Link to="/" className="menuItem">
          Productos
        </Link>
        <Link to="/category/mesas-de-comedor" className="menuItem">
          Mesas de comedor
        </Link>
        <Link to="/category/mesas-de-centro" className="menuItem">
          Mesas de centro
        </Link>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
