import "./Counter.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <>
      <div className="contenedorCounter">
        <AddCircleIcon onClick={sumar} />
        <h3>{contador}</h3>

        <RemoveCircleIcon onClick={restar} />
      </div>
      <div className="contenedorCounter">
        <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
      </div>
    </>
  );
};

export default Counter;
