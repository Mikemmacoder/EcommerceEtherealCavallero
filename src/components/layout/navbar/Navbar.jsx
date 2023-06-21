import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#BFA082",
        height: "100px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img
        src="src\components\assets\img\logoEthereal.png"
        alt="Logo Ethereal"
        width={160}
      />
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
