import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart, getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} id="badgeColor" color="action">
        <ShoppingCartIcon sx={{ fontSize: 35 }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
