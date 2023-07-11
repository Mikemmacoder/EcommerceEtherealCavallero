import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={1} color="primary">
        <ShoppingCartIcon sx={{ fontSize: 35 }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
