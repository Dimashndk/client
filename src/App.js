import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Component/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Legal from "./Pages/Legal";
import Products from "./Pages/Products";
import Galery from "./Pages/Galery";
import NotFound from "./Pages/NotFound";
import Valve from "./Pages/Valve";
import BoltNuts from "./Pages/BoltNuts";

function App() {
  return (
  <Router>
    <Routes>
      <Route element={<Header/>}>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About/>} />
        <Route path="legal" element={<Legal />} />
        <Route path="products" element={<Products />}>
          <Route path="valve" element={<Valve />} />
          <Route path="products/bolt-nuts" element={<BoltNuts />} />
        </Route>
        <Route path="galery" element={<Galery />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
}

export default App;
