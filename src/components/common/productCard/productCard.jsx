import { BorderBottom } from "@mui/icons-material";
import "./productCard.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 345, marginBottom: 5, marginTop: 5 }} className="cardP">
      <Link to={`/itemDetail/${elemento.id}`}>
        <CardMedia
          component="img"
          alt={elemento.description}
          height="290"
          image={elemento.img}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          $ {elemento.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
