import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Reviews from "./pages/reviews";
import StartingJourney from "./pages/startingjourney";
import Interlaken from "./pages/interlaken";
import Lucerne from "./pages/lucerne";
import Zermatt from "./pages/zermatt";

export default function App() {
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL_}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
