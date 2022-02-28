import React from "react";
import World from "../images/world_icon.gif";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={World} />
      <p>my travel journal.</p>
    </nav>
  );
}
