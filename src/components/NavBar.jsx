import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/listings">Listings</Link>
    <Link to="/compare">Compare</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/chat">Chat</Link>
  </nav>
);

export default NavBar;
