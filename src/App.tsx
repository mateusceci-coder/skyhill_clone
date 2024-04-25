import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import NavBar from "./layouts/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import {
  cintos,
  cordas,
  grips,
  joelheiras,
  munhequeiras,
} from "./data/CrossTraining";
import ProductItem from "./pages/ProductItem";
import { ShoppingCartParams } from "./interfaces/shoppingCart";
import { useState } from "react";

export default function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartParams[]>([]);

  return (
    <Router>
      <NavBar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/grips"
          element={<ProductsList name={"GRIPS"} product={grips} />}
        />
        {grips.map((grip) => (
          <Route
            path={`/grips/${grip.id}`}
            element={<ProductItem setShoppingCart={setShoppingCart} product={grip} />}
          />
        ))}
        <Route
          path="/joelheiras"
          element={<ProductsList name={"JOELHEIRAS"} product={joelheiras} />}
        />
        {joelheiras.map((joelheira) => (
          <Route
            path={`/joelheiras/${joelheira.id}`}
            element={<ProductItem setShoppingCart={setShoppingCart} product={joelheira} />}
          />
        ))}
        <Route
          path="/munhequeiras"
          element={
            <ProductsList name={"MUNHEQUEIRAS"} product={munhequeiras} />
          }
        />
        {munhequeiras.map((munhequeira) => (
          <Route
            path={`/munhequeiras/${munhequeira.id}`}
            element={<ProductItem setShoppingCart={setShoppingCart} product={munhequeira} />}
          />
        ))}
        <Route
          path="/cordas"
          element={<ProductsList name={"CORDAS"} product={cordas} />}
        />
        {cordas.map((corda) => (
          <Route
            path={`/cordas/${corda.id}`}
            element={<ProductItem setShoppingCart={setShoppingCart} product={corda} />}
          />
        ))}
        <Route
          path="/cintos"
          element={<ProductsList name={"CINTOS"} product={cintos} />}
        />
        {cintos.map((cinto) => (
          <Route
            path={`/cintos/${cinto.id}`}
            element={<ProductItem setShoppingCart={setShoppingCart} product={cinto} />}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}
