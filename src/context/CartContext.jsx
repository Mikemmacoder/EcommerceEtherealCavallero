import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Cargar el carrito desde el Local Storage al iniciar la aplicación
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData != null) {
      setCart(cartData);
    }
  }, []);

  useEffect(() => {
    // Guardar el carrito en el Local Storage cuando cambie
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existe = isInCart(item.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return { ...elemento, quantity: item.quantity };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  // CALCULAR EL TOTAL
  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };
  // CALCULAR LA CANTIDAD DE ITEMS
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    const product = cart.find((elemento) => elemento.id === +id);
    return product?.quantity;
  };
  // ----- Local Storage -----
  document.addEventListener("DOMContentLoaded", () => {
    let carritoLocal = JSON.parse(localStorage.getItem("cart"));
    if (carritoLocal != null) {
      setCart(carritoLocal);
    }
  });

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
