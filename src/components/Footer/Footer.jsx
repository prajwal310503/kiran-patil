import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import lotusLogo from '../../assets/bjp.png'; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-[#ff4d00] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Left Section - Logo & Social Icons */}
        <div className="flex flex-col items-start gap-4">
          <img src={lotusLogo} alt="Logo" className="w-16 h-16" />

          <div className="flex items-center gap-4 text-2xl">
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Right Section - Quick Links */}
        <div className="text-left">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
            <li className="hover:underline cursor-pointer">Event</li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-md mt-10 border-t border-white/30 pt-4">
        © 2025 kiranpatil. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
