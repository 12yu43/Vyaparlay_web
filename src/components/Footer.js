import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../images/clients/logo.png'

function Footer() {
  return (
    <footer className="bg-blue-50 py-10 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div>
        <img src={logo} alt="logo" className="w-44 h-20"/>   
          <p className="mt-3 text-sm">
          Vyaparlay is an integrated digital payment suite catering to merchants,
            facilitating seamless transactions for businesses and entrepreneurs.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <img src="/pci-dss.png" alt="PCI DSS Certified" className="h-8" />
            <img src="/iso-9001.png" alt="ISO 9001 Certified" className="h-8" />
            <img src="/iso-27001.png" alt="ISO 27001 Certified" className="h-8" />
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900">Information</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">About Vyaparlay</a></li>
            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900">Product</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Payment Gateway</a></li>
            <li><a href="#" className="hover:text-blue-600">Payment Links</a></li>
            <li><a href="#" className="hover:text-blue-600">Payouts</a></li>
            <li><a href="#" className="hover:text-blue-600">Frenzo Money</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900">Policies</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Refund Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms of Use</a></li>
            <li><a href="#" className="hover:text-blue-600">Chargeback Guide</a></li>
          </ul>
        </div>
      </div>

      {/* Contact & Socials */}
      <div className="text-center mt-8">
        <p className="text-sm">IHDP Business Park, Serenia Tower, 3rd Floor, Sector 127, Noida, UP</p>
        <p className="text-sm mt-2">📧 info@vyaparlay.com | 📞 +91 8448806637</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4 text-blue-800 text-xl">
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-600" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaYoutube className="cursor-pointer hover:text-red-600" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2024 Digidoos Payments Services Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
