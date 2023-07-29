import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const [data, setData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });
  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };
    //-----crear la orden en Firebase-----
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    //----- Modificar el STOCK en FIREBASE de cada documento -----
    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Checkout</h1>
      {orderId ? (
        <div>
          <h3>Gracias por tu compra</h3>
          <h4>Tu número de compra es: {orderId}</h4>
          <Link to="/">Volver a comprar</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su apellido"
            name="lastName"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su correo electrónico"
            name="cemail"
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutContainer;
