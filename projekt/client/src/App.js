import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Logistics from "./components/Logistics";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
