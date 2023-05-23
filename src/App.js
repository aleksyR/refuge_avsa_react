import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adoption from "./pages/Adoption";
import About from "./pages/About";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";
import TemplateDog from "./pages/TemplateDog";
import NotFound from "./pages/NotFound";
import { dogAdoption } from "./datas/dogAdoption";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route
            path="/adoption/:id"
            element={<TemplateDog dogAdoption={dogAdoption} />}
          />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
