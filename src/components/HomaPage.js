import React from "react";
import NavBar from "./Navbar/NavBar";
import FriendPayment from "../pages/FriendPayment";
import PaymentsPartner from "../pages/PaymentsPartner";
import PaymentType from "../pages/PaymentType";
import Features from "../pages/Features";

const HomePage = () => {
  return (
    <><div className="bg-gradient-to-r from-blue-600 to-blue-900 min-h-screen flex items-center justify-center">
          <NavBar />

          <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">

              <div className="relative w-full lg:w-1/2 flex justify-center">
                  <div className="bg-blue-300 rounded-3xl w-60 h-96 flex items-center justify-center shadow-xl">
                      <div className="absolute top-4 bg-orange-400 text-white text-sm px-4 py-1 rounded-full shadow-md">
                          📩 Payment Received by Bank!
                      </div>
                  </div>
              </div>

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
      </div><FriendPayment />
      <PaymentsPartner/>
      <PaymentType/>
      <Features/>
      </>
  );
};

export default HomePage;
