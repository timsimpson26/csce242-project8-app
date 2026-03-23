import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import StartingJourney from "./pages/StartingJourney";
import Interlaken from "./pages/Interlaken";
import Lucerne from "./pages/Lucerne";
import Zermatt from "./pages/Zermatt";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/starting-journey" element={<StartingJourney />} />
        <Route path="/interlaken" element={<Interlaken />} />
        <Route path="/lucerne" element={<Lucerne />} />
        <Route path="/zermatt" element={<Zermatt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;