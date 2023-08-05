import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary" id="navbarMobile">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img
              src="/src\components\assets\img\ethereal-logo-blanco.png"
              alt="Logo Ethereal"
              width={180}
              className="logo"
            />
          </Link>
        </Typography>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <Link to={"/"} id="itemDesplegable">
              Productos
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/category/mesas-de-comedor" id="itemDesplegable">
              Mesas de comedor
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/category/mesas-de-centro" id="itemDesplegable">
              Mesas de centro
            </Link>
          </MenuItem>
        </Menu>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
