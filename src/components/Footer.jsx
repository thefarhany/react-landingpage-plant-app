import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex gap-20 px-32 py-20 bg-[#9ABA9A]">
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold text-[#2F5C30]">Plant's</h1>
        <p className="text-[16px] mt-3 font-medium text-[#333333]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aliquid
          aut ab corporis quos impedit voluptate voluptas fugiat veritatis
          maxime!
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#2F5C30]">About</h2>
        <ul className="mt-3 font-medium text-[#333333]">
          <li>Contact</li>
          <li>Services</li>
          <li>Terms & Condition</li>
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#2F5C30]">Follow Us</h2>
        <ul className="mt-3 font-medium text-[#333333]">
          <li className="mt-2">
            <FaFacebook className="inline-block mr-2" size={20} /> Facebook
          </li>
          <li className="mt-2">
            <FaInstagram className="inline-block mr-2" size={20} /> Instagram
          </li>
          <li className="mt-2">
            <FaTwitter className="inline-block mr-2" size={20} /> Twitter
          </li>
          <li className="mt-2">
            <FaYoutube className="inline-block mr-2" size={20} /> YouTube
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
