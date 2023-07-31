import CounterContainer from "../../common/counter/CounterContainer";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ onAdd, totalQuantity, producto }) => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          component="img"
          alt={producto.description}
          height="290"
          image={producto.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>$ {producto.price}</span>
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
      </Card>
      <ToastContainer />;
    </div>
  );
};

export default ItemDetail;
