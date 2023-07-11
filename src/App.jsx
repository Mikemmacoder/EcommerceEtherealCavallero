import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Layout from "./components/layout/Layout";
import "./components/assets/font/font.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/pages/itemDetail/itemDetail";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<h1>Aca el checkout</h1>} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
