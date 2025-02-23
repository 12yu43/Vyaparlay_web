import React from "react";
import NavBar from "./Navbar/NavBar";
import FriendPayment from "../pages/FriendPayment";
import PaymentsPartner from "../pages/PaymentsPartner";
import PaymentType from "../pages/PaymentType";
import Features from "../pages/Features";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <><div className="bg-gradient-to-r from-blue-600 to-blue-900 min-h-screen flex items-center justify-center" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)" }}>
      <NavBar />

      <div className="relative w-full h-screen bg-gradient-to-r from-blue-700 to-blue-500 overflow-hidden">
        {/* Animated Circles */}

        <div className="circles-container">
        <div className="absolute top-[200px] -left-[10px] w-[300px] h-[300px] bg-white opacity-20 rounded-full animate-circle-scale"></div>
          <div className="absolute top-[50px] -left-[230px] w-[600px] h-[600px] bg-white opacity-30 rounded-full animate-circle-scale"></div>
          <div className="absolute -top-[100px] -left-[390px] w-[900px] h-[900px] bg-white opacity-20 rounded-full animate-circle-scale"></div>
          <div className="absolute -top-[250px] -left-[550px] w-[1200px] h-[1200px] bg-white opacity-10 rounded-full animate-circle-scale"></div>
          <div className="absolute -top-[400px] -left-[700px] bg-white w-[1500px] h-[1500px] rounded-full opacity-5 animate-circle-scale"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center h-full">

          {/* Left Side - Payment Box */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="bg-blue-300 rounded-3xl w-64 h-[450px] flex items-center justify-center shadow-xl">
              <div className="absolute top-4 bg-orange-400 text-white text-sm px-4 py-1 rounded-full shadow-md">
                📩 Payment Received by Bank!
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white mt-10 lg:mt-0">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Let <span className="text-yellow-400">FrenzoPay</span> Solve Payments!
            </h1>
            <p className="text-lg mt-4">
              We facilitate seamless transactions with a multitude of entrepreneurs and businesses, aiming to sustain, strengthen, develop, and innovate digital payment services in India.
            </p>
            <button className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              Get In Touch
            </button>

            {/* Statistics */}
            <div className="mt-10 flex justify-center lg:justify-start space-x-10 text-lg font-semibold">
              <div className="text-center">
                <h2 className="text-3xl font-bold">100+</h2>
                <p className="text-gray-200">Payment Modes</p>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold">95%+</h2>
                <p className="text-gray-200">Transaction Success Rate</p>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-gray-200">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><FriendPayment />
      <PaymentsPartner />
      <PaymentType />
      <Features />
      <Footer />
    </>
  );
};

export default HomePage;
