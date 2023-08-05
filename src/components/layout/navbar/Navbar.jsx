import { useEffect, useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth < 900 ? (
        <NavbarMobile />
      ) : (
        <div className="containerNav">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dmmszaubf/image/upload/v1689791873/ethereal-logo-blanco_j1seyl.png"
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
      )}
    </div>
  );
};

export default Navbar;
