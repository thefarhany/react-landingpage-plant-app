import React from "react";
import { FaBucket } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="container-xl mx-auto flex justify-between items-center px-14 py-5">
      <h1 className="text-3xl font-bold text-[#336735]">Plant's</h1>
      <ul className="flex items-center justify-center">
        <li className="mr-7">
          <a href="/" className="font-semibold text-[#4A5C4A]">
            Home
          </a>
        </li>
        <li className="mr-7">
          <a href="/" className="font-semibold text-[#4A5C4A]">
            Plant
          </a>
        </li>
        <li className="mr-7">
          <a href="/" className="font-semibold text-[#4A5C4A]">
            Services
          </a>
        </li>
        <li className="mr-7">
          <a href="/" className="font-semibold text-[#4A5C4A]">
            Collection
          </a>
        </li>
        <li className="mr-7">
          <a href="/" className="font-semibold text-[#4A5C4A]">
            About Us
          </a>
        </li>
        <li className="mr-7">
          <a href="/" className="font-semibold text-[#4A5C4A]">
            <FaBucket size={30} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
