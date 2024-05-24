import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";

const Header = () => {
  return (
    <div >
      <nav className={classes.header}>
        <ul>
          <p>BookStore</p>
        </ul>
        <ul className={classes.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};


export default Header;
