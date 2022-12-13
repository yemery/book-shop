import React from "react";
import "../Styles/navbar.css";
import { navBarWordLinks, navBarIconLinks } from "../../data/landingPage";

const NavBarLinks = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-white bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            the old book store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav navbar-nav-f">
              {navBarWordLinks.map((e) => {
                return (
                  <>
                    <a class="nav-link" href={e.path}>
                      {e.name}
                    </a>
                  </>
                );
              })}
            </div>
            <div class="navbar-nav navbar-nav-s">
              {navBarIconLinks.map((el) => {
                return (
                  <>
                    <a class="nav-link" href={el.path}>
                      <img className="svgIcon" src={el.src} alt={el.id} />
                      <i>(0)</i>{" "}
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
