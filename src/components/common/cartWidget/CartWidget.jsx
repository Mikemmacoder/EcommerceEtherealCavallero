import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
  const { cart, getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} id="badgeColor" color="action">
        <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
