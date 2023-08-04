import { Button, TextField } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import "./Form.css";

const Checkout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div className="containerForm">
      <div className="containerTitulo">
        <Link to="/cart" id="linkVolver">
          <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
          Volver a carrito
        </Link>
        <h2 className="tituloCarrito">Mis datos</h2>
      </div>
      <form onSubmit={handleSubmit} id="Form">
        <TextField
          margin="dense"
          size="small"
          type="text"
          label="Nombre"
          variant="outlined"
          error={errors.name ? true : false}
          name="name"
          onChange={handleChange}
          helperText={errors.name}
        />
        <TextField
          margin="dense"
          size="small"
          type="text"
          label="Apellido"
          variant="outlined"
          error={errors.lastName ? true : false}
          name="lastName"
          onChange={handleChange}
          helperText={errors.lastName}
        />
        <TextField
          margin="dense"
          size="small"
          type="text"
          label="Teléfono"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          error={errors.phone ? true : false}
          helperText={errors.phone}
        />
        <TextField
          margin="dense"
          size="small"
          type="text"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          margin="dense"
          size="small"
          type="text"
          label="Confirmar email"
          variant="outlined"
          name="repeatEmail"
          onChange={handleChange}
          error={errors.repeatEmail ? true : false}
          helperText={errors.repeatEmail}
        />
        <Button type="submit" variant="contained" id="botonComprar">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
