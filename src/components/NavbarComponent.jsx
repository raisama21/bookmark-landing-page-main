import React from "react";
import { useState, useEffect } from "react";
import logoBookmark from "../img/logo-bookmark.svg";

function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState(window.innerWidth > 1000);

  const handleHamMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const updateMedia = () => {
    setMedia(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  function NavList() {
    return (
      <ul role="list" className="nav-list">
        <li>
          <a href="#">features</a>
        </li>
        <li>
          <a href="#">pricing</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <li>
          <button className="button-style login">LOGIN</button>
        </li>
      </ul>
    );
  }

  return (
    <header>
      {open && <div className="overlay"></div>}
      <nav className="navigation-bar">
        <img src={logoBookmark} />

        <div
          onClick={handleHamMenu}
          className={`hamburger-menu ${open ? "open" : ""}`}
        >
          <div className="ham-top"></div>
          <div className="ham-middle"></div>
          <div className="ham-bottom"></div>
        </div>
        {media ? <NavList /> : ""}
        {open && <NavList />}
      </nav>
    </header>
  );
}

export default NavbarComponent;
