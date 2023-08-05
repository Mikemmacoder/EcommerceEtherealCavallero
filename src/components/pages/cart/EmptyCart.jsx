import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import "./Cart.css";

const EmptyCart = () => {
  return (
    <div className="containerCarrito">
      <div className="containerTitulo">
        <Link to="/" id="linkVolver">
          <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
          Volver a productos
        </Link>
        <h2 className="tituloCarrito">Carrito vacío</h2>
      </div>
      <img
        src="https://res.cloudinary.com/dmmszaubf/image/upload/v1691258892/empty_cart_co35_ogmxus.png"
        alt="empty cart"
        className="imgEmptyCart"
      />
    </div>
  );
};

export default EmptyCart;
