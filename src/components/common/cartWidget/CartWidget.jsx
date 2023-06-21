import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={1} color="primary">
        <ShoppingCartIcon sx={{ fontSize: 35 }} />
      </Badge>
    </div>
  );
};

export default CartWidget;
