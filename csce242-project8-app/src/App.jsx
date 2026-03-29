import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Reviews from "./pages/reviews";
import StartingJourney from "./pages/startingjourney";
import Interlaken from "./pages/interlaken";
import Lucerne from "./pages/lucerne";
import Zermatt from "./pages/zermatt";

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