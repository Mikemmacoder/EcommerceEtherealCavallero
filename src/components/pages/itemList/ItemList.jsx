import { Skeleton } from "@mui/material";
import ProductCard from "/src/components/common/productCard/ProductCard.jsx";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {items.length > 0
        ? items.map((elemento) => {
            return <ProductCard key={elemento.id} elemento={elemento} />;
          })
        : arr.map((e) => {
            return (
              <div key={e}>
                <Skeleton variant="rectangular" width={345} height={290} />
                <Skeleton variant="text" width={150} height={80} />
                <Skeleton variant="text" width={100} height={55} />
              </div>
            );
          })}
    </div>
  );
};

export default ItemList;
