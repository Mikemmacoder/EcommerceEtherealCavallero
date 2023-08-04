import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./Cart.css";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = ({ cart, limpiar, deleteById, getTotalPrice }) => {
  let total = getTotalPrice();

  return (
    <div className="containerCarrito">
      <div>
        <div className="containerTitulo">
          <Link to="/" id="linkVolver">
            <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
            Seguir comprando
          </Link>
          <h2 className="tituloCarrito">Mi carrito</h2>
        </div>

        {cart.map((elemento) => {
          return (
            <div key={elemento.id} className="productBox">
              <img
                src={elemento.img}
                alt={elemento.description}
                className="imgProduct"
              />
              <Typography gutterBottom variant="h6" component="h1">
                {elemento.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span>
                  <strong>Precio: $</strong>
                </span>
                {elemento.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span>Cantidad: {elemento.quantity}</span>
              </Typography>

              <DeleteIcon onClick={() => deleteById(elemento.id)} />
            </div>
          );
        })}
        <div className="containerTotal">
          <h3>Precio total: ${total}</h3>
          {cart.length > 0 && (
            <Link onClick={limpiar} id="vaciarCarrito">
              <DeleteOutlineIcon sx={{ fontSize: 20 }} />
              Vaciar carrito
            </Link>
          )}
        </div>

        <Link to="/checkout">
          <button className="botonComprar">Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
