import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "../../img/logo yoop.svg";

import "./NavbarStyle.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="container-logo">
          <img src={logo} className="App-logo" alt="Logo Yoop" />
        </div>
        <nav className="nav">
          <Link className="btn-nav" to="/">
            {" "}
            Inicio{" "}
          </Link>
          <Link className="btn-nav" to="/asociate">
            {" "}
            Asociate{" "}
          </Link>
          <Link className="btn-nav" to="/marcas-amigas">
            {" "}
            Marcas Amigas{" "}
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
