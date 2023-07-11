import { useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (cantidad) => {
    console.log(producto);
    console.log(cantidad);
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
          <CounterContainer stock={producto.stock} onAdd={onAdd} />
        </CardContent>
      </Card>
      ;
    </div>
  );
};

export default ItemDetail;
