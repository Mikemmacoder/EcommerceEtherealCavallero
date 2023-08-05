import { useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : Swal.fire("Cantidad máxima para agregar al carrito", "", "info");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <Counter
      contador={contador}
      sumar={sumar}
      restar={restar}
      onAdd={onAdd}
      stock={stock}
    />
  );
};

export default CounterContainer;
