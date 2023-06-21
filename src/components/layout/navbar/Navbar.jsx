import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
