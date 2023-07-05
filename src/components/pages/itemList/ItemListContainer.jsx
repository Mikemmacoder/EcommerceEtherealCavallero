import { products } from "../../../productsMock";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { categoryName } = useParams();

  useEffect(() => {
    let productsFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? products : productsFiltrados);
      //   reject({message: "No autorizado", status: 401})
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [categoryName]);

  console.log(items);

  return <ItemList items={items} />;
};

export default ItemListContainer;
