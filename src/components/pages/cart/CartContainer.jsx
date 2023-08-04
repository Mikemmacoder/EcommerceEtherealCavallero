import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Sí, limpiar carrito",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpiado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito se conserva como estaba", "", "info");
      }
    });
    //
  };

  return (
    <div>
      {cart.length > 0 ? (
        <Cart
          cart={cart}
          limpiar={limpiar}
          deleteById={deleteById}
          getTotalPrice={getTotalPrice}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartContainer;
