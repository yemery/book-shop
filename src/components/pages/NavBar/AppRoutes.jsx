import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "../Books/Books";
import NavBarLinks from "./NavBarLinks";
import OthersIndex from "../OtherProducts/OthersIndex";
import ContactIndex from "../Contact/ContactIndex";
import LinkError from "../Errors/LinkError";
import LandingPage from "../LandingPage/LandingPage";
import BookDetails from "../Books/BookDetails";

const NavBarIndex = () => {
  return (
    <>
      <Router>
        <NavBarLinks />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/otherProducts" element={<OthersIndex />}></Route>
          <Route path="/contact" element={<ContactIndex />}></Route>
          <Route path="/bookDetails/:bookId" element={<BookDetails />}></Route>

          <Route path="*" element={<LinkError />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default NavBarIndex;
