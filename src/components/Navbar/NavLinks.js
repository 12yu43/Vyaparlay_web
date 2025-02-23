import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { MdKeyboardArrowDown } from "react-icons/md";


const NavLinks = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <div className="relative flex space-x-4">
            <HashLink className="px-4 font-extrabold text-[17px] text-blue hover:text-blue-900" smooth to="/home-page">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-[17px] text-blue hover:text-blue-900" smooth to="/#services">
                About
            </HashLink>

            {/* Products Dropdown */}
            <div className="relative">
            <button
                className="flex items-center gap-1 px-4 font-extrabold text-[17px] text-blue hover:text-blue-900 focus:outline-none"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
                Products
                <MdKeyboardArrowDown size={24} /> 
            </button>
                {isProductsOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-blue text-[17px] shadow-lg rounded-md">
                        <HashLink
                            className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
                            to="/#payment-gateway"
                            onClick={() => setIsProductsOpen(false)}
                        >
                            Payment Gateway 
                        </HashLink>
                        <HashLink
                            className="block px-4 py-2 text-blue-900 text-[17px] hover:bg-gray-100"
                            to="/#payment-links"
                            onClick={() => setIsProductsOpen(false)}
                        >
                            Payment Links
                        </HashLink>
                        <HashLink
                            className="block px-4 py-2 text-blue-900 text-[17px] hover:bg-gray-100"
                            to="/#payouts"
                            onClick={() => setIsProductsOpen(false)}
                        >
                            Payouts
                        </HashLink>
                    </div>
                )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative ">
                <button
                    className="flex items-center gap-1 px-4 font-extrabold text-[17px] text-blue hover:text-blue-900 focus:outline-none"
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                    Resources <MdKeyboardArrowDown size={24} /> 
                </button>
                {isResourcesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-blue text-[17px] shadow-lg rounded-md">
                        <HashLink
                            className="block px-4 py-2 text-blue-900 text-[17px] hover:bg-gray-100"
                            to="/Blogs"
                            onClick={() => setIsResourcesOpen(false)}
                        >
                            Blogs
                        </HashLink>
                        <HashLink
                            className="block px-4 py-2 text-blue-900 text-[17px] hover:bg-gray-100"
                            to="/#frenzo-aware"
                            onClick={() => setIsResourcesOpen(false)}
                        >
                            Frenzo Aware
                        </HashLink>
                    </div>
                )}
            </div>

            <HashLink className="px-4 font-extrabold text-blue hover:text-blue-900 text-[17px]" to="/Career">
                Careers
            </HashLink>
            <HashLink className="px-4 font-extrabold text-blue hover:text-blue-900 text-[17px]" to="/contact#contact">
                Contact
            </HashLink>
        </div>
    );
};

export default NavLinks;
