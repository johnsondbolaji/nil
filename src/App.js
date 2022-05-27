import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Design from "./pages/design";
import Certificates from "./pages/certificates";
import Webdev from "./pages/webdev";
import Contact from "./pages/contact";
import Footer from "./Components/Footer/Footer";
import ScrollButton from "./Components/ScrollTotop/ScrollButton";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/design" element={<Design />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <ScrollButton />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
