import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../component/site/About";
import Contact from "../component/site/Contact";
import Home from "../component/site/Home";
import Search from "../component/site/Search";
import Site from "../component/site/Site";
import CastList from "../component/site/CastList";
import ProfileDetails from "../component/site/ProfileDetails";
import FamilyDetails from "../component/site/FamilyDetails";
import EducationOrPartnerDetails from "../component/site/EducationOrPartnerDetails";
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
          <Route path="profileDetails" element={<ProfileDetails />} />
          <Route path="familyDetails" element={<FamilyDetails />} />
          <Route
            path="educationDetails"
            element={<EducationOrPartnerDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
