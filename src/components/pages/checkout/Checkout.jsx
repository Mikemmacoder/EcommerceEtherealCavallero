import { Button, TextField } from "@mui/material";

const Checkout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Nombre"
          variant="outlined"
          error={errors.name ? true : false}
          name="name"
          onChange={handleChange}
          helperText={errors.name}
        />
        <TextField
          type="text"
          label="Apellido"
          variant="outlined"
          error={errors.lastName ? true : false}
          name="lastName"
          onChange={handleChange}
          helperText={errors.lastName}
        />
        <TextField
          type="text"
          label="Teléfono"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          error={errors.phone ? true : false}
          helperText={errors.phone}
        />
        <TextField
          type="text"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          type="text"
          label="Confirmar email"
          variant="outlined"
          name="repeatEmail"
          onChange={handleChange}
          error={errors.repeatEmail ? true : false}
          helperText={errors.repeatEmail}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
