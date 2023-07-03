import { useState } from "react";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import Navbar from "./components/layout/navbar/Navbar";
import "./components/assets/font/font.css";

function App() {
  const [saludo, setSaludo] = useState(
    "Hola! Te damos la bienvenida a Ethereal"
  );

  return (
    <div>
      <Navbar>
        <ItemListContainer saludo={saludo} />
      </Navbar>
    </div>
  );
}

export default App;
