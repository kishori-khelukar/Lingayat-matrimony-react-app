import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "../component/site/About";
import Contact from "../component/site/Contact";
import Home from "../component/site/Home";
import Search from "../component/site/Search";
import Site from "../component/site/Site";
import GroomProfile from "../component/site/GroomProfile";
import CastList from "../component/site/CastList";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
          <Route path="cast" element={<CastList />} />
          <Route path="groom" element={<GroomProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
