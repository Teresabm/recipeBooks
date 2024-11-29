import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <>
      <header className="header flex-center">
        <div className="container flex-center">
          <Link to="/home">/RecipesBook</Link>
          <nav className="header-nav">
            <ul className="header-list">
              <Link className="/home" to="/home">
                <li className="header-link">Home</li>
              </Link>
              <Link  to="/about">
                <li className="header-link">Nosotros</li>
              </Link>
            </ul>
          </nav>
          <div className="header-dinamic">
            <label htmlFor="header-input" className="header-label"></label>
            <input type="checkbox" name="check" id="header-input" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
