import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="containerNav">
        <Link to="/">
          <img
            src="src\components\assets\img\logoEthereal.png"
            alt="Logo Ethereal"
            width={160}
          />
        </Link>
        <ul className="menuNav fontEthereal" id="sinPuntos">
          <Link to="/">home</Link>
          <Link to="">productos</Link>
          <Link to="">contacto</Link>
        </ul>
        <CartWidget />
      </div>

      {/* {children} */}
    </div>
  );
};

export default Navbar;
