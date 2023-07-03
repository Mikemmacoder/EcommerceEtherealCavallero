import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ saludo, items }) => {
  console.log("llego al presentacional los items: ", items);

  return (
    <div>
      <h1>{saludo}</h1>
      <h2>Acá van los productos</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
