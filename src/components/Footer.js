import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../images/clients/logo.png'

function Footer() {
  return (
    <footer className="bg-[#e4edfb] py-10 text-gray-700">
      <div className="max-w-6xl mx-auto  grid md:grid-cols-5 gap-10">
        <div>
          <img src={logo} alt="logo" className="w-44 h-20" />
          <p className="mt-3 text-[15px] text-[#172e73] font-semibold">
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
          <h3 className="text-lg font-semibold text-[#2c6cb4] text-[22px]">Information</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">About Vyaparlay</a></li>
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Pricing</a></li>
            <li><a href="#" className=" text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Blogs</a></li>
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Careers</a></li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-[#2c6cb4] text-[22px]">Product</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Payment Gateway</a></li>
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Payment Links</a></li>
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Payouts</a></li>
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Frenzo Money</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-[#2c6cb4] text-[22px]">Policies</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Refund Policy</a></li>
            <li><a href="#" className="text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Terms of Use</a></li>
            <li><a href="#" className=" text-[15px] text-[#172e73] font-semibold hover:text-blue-600">Chargeback Guide</a></li>
          </ul>
        </div>
        <div>

          <h3 className="text-lg font-semibold text-[#2c6cb4] text-[22px]">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <p className="text-sm text-[15px] text-[#172e73] font-semibold">IHDP Business Park, Serenia Tower, 3rd Floor, Sector 127, Noida, UP</p>
            <p className="text-sm mt-2 text-[15px] text-[#172e73] font-semibold">📧 info@vyaparlay.com | 📞 +91 8448806637</p>
          </ul>
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-4">
            <div className="w-10 h-8 flex items-center justify-center bg-[#2DC4FD] text-white rounded-full cursor-pointer hover:bg-blue-600">
              <FaFacebookF />
            </div>
            <div className="w-10 h-8 flex items-center justify-center bg-[#2DC4FD] text-white rounded-full cursor-pointer hover:bg-pink-600">
              <FaInstagram />
            </div>
            <div className="w-10 h-8 flex items-center justify-center bg-[#2DC4FD] text-white rounded-full cursor-pointer hover:bg-blue-500">
              <FaLinkedinIn />
            </div>
            <div className="w-10 h-8 flex items-center justify-center bg-[#2DC4FD] text-white rounded-full cursor-pointer hover:bg-blue-400">
              <FaTwitter />
            </div>
            <div className="w-10 h-8 flex items-center justify-center bg-[#2DC4FD] text-white rounded-full cursor-pointer hover:bg-red-600">
              <FaYoutube />
            </div>
          </div>

        </div>
      </div>




      {/* Copyright */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-[#7393a4] font-semibold">
        © 2024 Digidios Payments Services Private Limited. The content available on the website is protected by copyright laws. All rights reserved.      </div>
    </footer>
  );
}

export default Footer;
