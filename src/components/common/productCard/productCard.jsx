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
    <Card sx={{ width: 345, marginBottom: 5, marginTop: 5 }}>
      <CardMedia
        component="img"
        alt={elemento.description}
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
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
