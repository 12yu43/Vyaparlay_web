import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <div className="relative flex space-x-4">
            <HashLink className="px-4 font-extrabold text-white hover:text-blue-900" smooth to="/home-page">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-white hover:text-blue-900" smooth to="/#services">
                About
            </HashLink>

            {/* Products Dropdown */}
            <div className="relative">
                <button
                    className="px-4 font-extrabold text-white hover:text-blue-900 focus:outline-none"
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                    Products ▼
                </button>
                {isProductsOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                        <HashLink
                            className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
                            to="/#payment-gateway"
                            onClick={() => setIsProductsOpen(false)}
                        >
                            Payment Gateway
                        </HashLink>
                        <HashLink
                            className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
                            to="/#payment-links"
                            onClick={() => setIsProductsOpen(false)}
                        >
                            Payment Links
                        </HashLink>
                        <HashLink
                            className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
                            to="/#payouts"
                            onClick={() => setIsProductsOpen(false)}
                        >
                            Payouts
                        </HashLink>
                    </div>
                )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
                <button
                    className="px-4 font-extrabold text-white hover:text-blue-900 focus:outline-none"
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                    Resources ▼
                </button>
                {isResourcesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                        <HashLink
                            className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
                            to="/#blogs"
                            onClick={() => setIsResourcesOpen(false)}
                        >
                            Blogs
                        </HashLink>
                        <HashLink
                            className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
                            to="/#frenzo-aware"
                            onClick={() => setIsResourcesOpen(false)}
                        >
                            Frenzo Aware
                        </HashLink>
                    </div>
                )}
            </div>

            <HashLink className="px-4 font-extrabold text-white hover:text-blue-900" to="/contact#contact">
                Careers
            </HashLink>
            <HashLink className="px-4 font-extrabold text-white hover:text-blue-900" to="/contact#contact">
                Contact
            </HashLink>
        </div>
    );
};

export default NavLinks;
