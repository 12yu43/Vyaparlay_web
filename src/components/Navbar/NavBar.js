import React, { useState, useEffect } from 'react';
import logo from '../../images/clients/logo.png';
import NavLinks from '../Navbar/NavLinks';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
<nav className={`fixed top-0 w-full z-30 transition-all duration-300  ease-in-out ${!top ? 'bg-white text-black font-bold shadow-lg' : 'bg-[#99b9f5] text-white'}`}>
            <div className="flex flex-row justify-between items-center py-2 px-4 lg:px-12">
                <div className="flex flex-row items-center">
                    <img src={logo} alt="logo" className="w-40 h-20"/>
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-black" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className={`hidden lg:flex space-x-6 p-5 ${top ? 'text-white' : 'text-black font-bold'}`}>
                        <NavLinks />
                    </div>
                    <div className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${isOpen ? "block" : "hidden"}`}>
                        <div className='flex flex-col space-y-6 text-black font-bold'>
                            <NavLinks />
                        </div>                                                
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
