import CounterContainer from "../../common/counter/CounterContainer";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ItemDetail.css";

const ItemDetail = ({ onAdd, totalQuantity, producto }) => {
  return (
    <div className="boxProduct">
      <Card className="productDetailContainer">
        <CardMedia
          component="img"
          alt={producto.description}
          height="390"
          image={producto.img}
        />
        <div className="productDetails">
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {producto.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>
                <strong>Descripción: </strong>
              </span>
              {producto.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>
                <strong>Precio: $</strong>
              </span>
              {producto.price}
            </Typography>
          </CardContent>
          {(typeof totalQuantity === "undefined" ||
            producto.stock > totalQuantity) &&
            producto.stock > 0 && (
              <CounterContainer
                stock={producto.stock}
                onAdd={onAdd}
                initial={totalQuantity}
              />
            )}

          {producto.stock === 0 && <h2>No hay stock</h2>}
          {typeof totalQuantity !== "undefined" &&
            totalQuantity === producto.stock && (
              <h2>tenes las maximas cantidades en el carrito</h2>
            )}
          {totalQuantity > 0 && (
            <Typography variant="body2" color="text.secondary">
              <h2>Has añadido {producto.quantity} productos al carrito</h2>
            </Typography>
          )}
        </div>
      </Card>
      <ToastContainer />;
    </div>
  );
};

export default ItemDetail;
