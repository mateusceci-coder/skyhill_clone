import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import NavBar from "./layouts/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import { grips, joelheiras} from "./data/CrossTraining";



export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grips" element={<ProductsList product={grips} />} />
        <Route path="/joelheiras" element={<ProductsList product={joelheiras} />} />
      </Routes>
      <Footer />
    </Router>
  );
}
