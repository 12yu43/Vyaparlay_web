import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg'; // Make sure this path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pg from '../images/clients/pg.webp';

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="hero" id='hero'>
            <NavBar />

            <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                        <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                            Payment Gateway
                        </h1>
                        <div className="text-xl font-semibold tracking-tight mb-5 text-gray-400">Experience Exponential Business Growth
                            With Vyaparlay</div>
                        <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                            Choose Vyaparlay and quickly get onboard with India's most agile and

                            best payment gateway for hassle-free onboarding, speedy integration and a feature rich payment experience! </div>
                        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            <Link to="/contact" className="text-white bg-blue-900 hover:bg-[#03c6fc] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl  sm:w-auto sm:mb-0">
                                Get In Touch
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                        <img alt='cghgj' className="rounded-t float-right duration-1000 w-[80%] " src={pg} />
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Hero;

