import "./Counter.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Counter = ({ contador, sumar, restar, onAdd, stock }) => {
  return (
    <div className="box">
      <div className="contenedorCounter">
        <AddCircleIcon onClick={sumar} />
        <h3>{contador}</h3>

        <RemoveCircleIcon onClick={restar} />
      </div>
      <div className="box">
        <button onClick={() => onAdd(contador)} className="buttonCounter">
          Agregar al carrito
        </button>
        <h5 className="contenedorCounter">Stock disponible: {stock}</h5>
      </div>
    </div>
  );
};

export default Counter;
