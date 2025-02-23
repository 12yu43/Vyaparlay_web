import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';
import contact from '../images/clients/contact.png'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";


const Contact = () => {
    useDocTitle('Vyaparlay - Send us a message')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                clearInput()
                Notiflix.Report.success(
                    'Success',
                    response.data.message,
                    'Okay',
                );
            })
            .catch(function (error) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                const { response } = error;
                if (response.status === 500) {
                    Notiflix.Report.failure(
                        'An error occurred',
                        response.data.message,
                        'Okay',
                    );
                }
                if (response.data.errors !== null) {
                    setErrors(response.data.errors)
                }

            });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>

            <div className="flex justify-center">
                <img
                    src={contact}
                    alt="FrenzoPay Illustration"
                    className="w-full h-[50vh] object-cover"
                />
            </div>
            <div id='contact' className="flex justify-center items-center  w-full bg-white py-12 lg:py-24 ">

                <div className="container max-w-6xl bg-white shadow-lg rounded-lg p-8">

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 p-6 bg-white shadow-md rounded-md">
                            <h2 className="text-4xl font-semibold text-[#172e73] flex items-center gap-2">
                                📞 Contact Us
                            </h2>
                            <p className="text-base text-gray-900 mt-2">
                                Get in touch and let us know how we can help. For general queries,
                                including partnership opportunities, please email{" "}
                                <a href="mailto:info@frenzopay.com" className="text-blue-600 font-medium">
                                    info@frenzopay.com
                                </a>.
                            </p>
                            {/* Form Fields */}
                            <form className="mt-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <textarea
                                    placeholder="Leave Us A Message"
                                    className="p-3 border rounded-md w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>

                                {/* ReCAPTCHA Placeholder */}
                                <div className="bg-gray-200 p-4 rounded-md text-center text-sm text-gray-500">
                                    [ReCAPTCHA goes here]
                                </div>

                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold p-3 rounded-md">
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                            {/* Email Card */}
                            <div className="bg-[#2D5EE3] text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
                                <FaEnvelope className="text-2xl mb-2" />
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-sm">info@frenzopay.com</p>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-[#EAF0FD] text-blue-800 p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
                                <FaPhone className="text-2xl mb-2" />
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-sm">+91 8448806637</p>
                            </div>

                            {/* Address Card */}
                            <div className="bg-[#EAF0FD] text-blue-800 p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
                                <FaMapMarkerAlt className="text-2xl mb-2" />
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-sm">
                                    IHDP Business Park, Serenia Tower, 3rd Floor, Sector-127 Noida, 201301 U.P
                                </p>
                            </div>

                            {/* Socials Card */}
                            <div className="bg-[#2D5EE3] text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center text-center">
                                <FaGlobe className="text-2xl mb-2" />
                                <h3 className="font-semibold">Socials</h3>
                                <div className="flex gap-3 mt-2">
                                    <FaFacebookF className="cursor-pointer hover:text-blue-400" />
                                    <FaInstagram className="cursor-pointer hover:text-pink-400" />
                                    <FaLinkedinIn className="cursor-pointer hover:text-blue-300" />
                                    <FaTwitter className="cursor-pointer hover:text-blue-200" />
                                    <FaYoutube className="cursor-pointer hover:text-red-400" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container max-w-full mt-10  mb-2 text-center">
                <h1 className="text-4xl font-bold text-[#172e73] mb-4">
                    Find Us On Google Maps
                </h1>
                <div className="w-full h-80 overflow-hidden rounded-lg shadow-md mb-0.5">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093707!2d-122.4194152846773!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3c8c6e6b%3A0x4c5b3e8b7445a3c6!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1636738910112!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact;

