/*
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white text-center">
      <Link to="/" className="text-xl font-bold">Recipe Platform</Link>
    </nav>
  );
};

export default Navbar;
*/

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-teal-600 p-4 text-white text-center shadow-md">
      <Link to="/" className="text-2xl font-extrabold tracking-wide hover:opacity-90 transition-opacity">
        World Flavors 🌍
      </Link>
    </nav>
  );
};

export default Navbar;
