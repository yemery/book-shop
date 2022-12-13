import React from "react";
import "../Styles/navbar.css";
import { useState, useEffect } from "react";
import { navBarWordLinks, navBarIconLinks } from "../../data/landingPage";

const NavBarLinks = () => {
  const [bool, setBool] = useState(true);
  const [windowW, setWindowW] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const newW = window.innerWidth;
      setWindowW(newW);
    });
    // console.log(windowW);
  }, [bool, windowW]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            the old book store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <img
                className="toggleNav"
                onClick={(e) => setBool(!bool)}
                src={
                  bool
                    ? "Icons/three-horizontal-lines-outline-icon (1).svg"
                    : "Icons/close-round-line-icon.svg"
                }
                alt=""
              />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-nav-f">
              {navBarWordLinks.map((e) => {
                return (
                  <>
                    <a className="nav-link" href={e.path} key={e.id}>
                      {e.name}
                    </a>
                  </>
                );
              })}
            </div>
            <div className="navbar-nav navbar-nav-s">
              {navBarIconLinks.map((e) => {
                return (
                  <>
                    <a className="nav-link" href={e.path} key={e.id}>
                      {windowW <= 992 && windowW <= 400 ? (
                        e.name
                      ) : (
                        <img src={e.src} className="svgIcon" alt="" />
                      )}
                      {e.id !== 3 ? <i>(0)</i> : ""}
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarLinks;
