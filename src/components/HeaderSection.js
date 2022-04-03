import React from "react";
import { HashLink as Link } from "react-router-hash-link";
function HeaderSection() {
  return (
    <div>
      <header>
        <Link smooth to="#" className="logo">
          <span>best</span>App
        </Link>

        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar" className="fas fa-bars"></label>

        <nav className="navbar">
          <Link smooth to="#home">
            home
          </Link>
          <Link smooth to="#features">
            features
          </Link>
          <Link smooth to="#about">
            about
          </Link>
          <Link smooth to="#review">
            review
          </Link>
          <Link smooth to="#pricing">
            pricing
          </Link>
          <Link smooth to="#contact">
            contact
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default HeaderSection;
