import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AppHeader.css";

export const AppHeader = (): JSX.Element => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__item">
          <Link
            className={path === "/" ? "header__link_active" : "header__link"}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="header__item">
          <Link
            className={
              path === "/about" ? "header__link_active" : "header__link"
            }
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};
