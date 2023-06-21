import { useState } from "react";
import ItemList from "./components/pages/itemList/itemList.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";

function App() {
  const [saludo, setSaludo] = useState(
    "Hola! Te damos la bienvenida a Ethereal"
  );

  return (
    <div>
      <Navbar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
