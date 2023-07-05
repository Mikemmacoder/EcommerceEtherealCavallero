import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento, isInItemList = false }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="290"
        image={elemento.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        {isInItemList ? (
          <Link to={`/itemDetail/${elemento.id}`}>
            <Button size="small">Ver detalle</Button>
          </Link>
        ) : (
          <Button size="small">Eliminar del carrito</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
