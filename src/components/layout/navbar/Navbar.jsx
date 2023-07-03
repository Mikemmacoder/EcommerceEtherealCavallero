import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className="containerNav">
        <img
          src="src\components\assets\img\logoEthereal.png"
          alt="Logo Ethereal"
          width={160}
        />
        <ul className="menuNav fontEthereal" id="sinPuntos">
          <li>home</li>
          <li>productos</li>
          <li>contacto</li>
        </ul>
        <CartWidget />
      </div>

      {children}
    </div>
  );
};

export default Navbar;
