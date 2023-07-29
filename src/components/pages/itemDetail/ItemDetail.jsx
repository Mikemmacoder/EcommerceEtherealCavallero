import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [producto, setProducto] = useState({});

  const { id } = useParams();
  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
    toast.success("Producto agregado exitosamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
