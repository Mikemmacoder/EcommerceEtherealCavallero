import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { toast } from "react-toastify";

const ItemDetailContainer = () => {
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
    <ItemDetail
      onAdd={onAdd}
      totalQuantity={totalQuantity}
      producto={producto}
    />
  );
};

export default ItemDetailContainer;
