import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import Navbar1 from "./Components/Navbar1";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>

      <div className="d-flex flex-column min-vh-100">

        <Navbar1 />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;