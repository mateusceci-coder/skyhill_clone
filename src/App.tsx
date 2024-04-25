import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import NavBar from "./layouts/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import { cordas, grips, joelheiras, munhequeiras} from "./data/CrossTraining";
import ProductItem from "./pages/ProductItem";



export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grips" element={<ProductsList name={"GRIPS"} product={grips} />} />
        {grips.map((grip) => (
          <Route path={`/grips/${grip.id}`} element={<ProductItem product={grip} />}  />
        ) )}
        <Route path="/joelheiras" element={<ProductsList name={"JOELHEIRAS"} product={joelheiras} />} />
        {joelheiras.map((joelheira) => (
          <Route path={`/joelheiras/${joelheira.id}`} element={<ProductItem product={joelheira} />}  />
        ) )}
        <Route path="/munhequeiras" element={<ProductsList name={"MUNHEQUEIRAS"} product={munhequeiras} />} />
        {munhequeiras.map(munhequeira => (
        <Route path={`/munhequeiras/${munhequeira.id}`} element={<ProductItem product={munhequeira} />} />
      ))}
      <Route path="/cordas" element={<ProductsList name={"CORDAS"} product={cordas} />} />
      {cordas.map(corda => (
        <Route path={`/cordas/${corda.id}`} element={<ProductItem product={corda} />} />
      ))}
      </Routes>
      <Footer />
    </Router>
  );
}
