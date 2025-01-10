import React from "react";
import logo from "@/public/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between border-t-2 border-primary p-6">
      {/* Logo Section */}
      <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
        <img src={logo.src} alt="Logo" className="w-24 sm:ml-6" />
      </div>

      {/* Social Media Links */}
      <div className="flex flex-row gap-10 justify-center sm:mb-0 sm:pt-6">
        <div className="flex flex-col items-center">
          <FaFacebook size={40} className="text-blue-600" />
          <p className="text-center">Facebook Page</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTelegram size={40} className="text-blue-400" />
          <p className="text-center">Telegram Bot</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center sm:text-right text-sm font-thin mt-4 sm:mt-10">
        <p>© 2024 Empower U. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
