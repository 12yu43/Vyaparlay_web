import React from "react";
import dashbord from '../images/clients/dashbord.png'

function Portfolio() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 bg-white">
      {/* Left Content */}
      <div className="flex flex-col md:flex-row items-center py-12  px-6 md:px-16 flex-c">
  {/* Left Content */}
  <div className="md:w-1/2 flex flex-col justify-center align-items-center">
    <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Power-Packed Dashboard Empowering Business Decisions
        </h2>
        <p className="text-gray-600 mb-4">
          We recognize that information is power, and when it comes to payments, 
          data and analytics are among the most critical factors. With our dynamic 
          and customizable dashboard, you can access real-time data and get insights 
          to make informed business decisions that maximize revenue.
        </p>
        {/* Bullet Points */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800 font-medium">
          <li>⚡ Real-Time Data Access</li>
          <li>📊 Dynamic and Customizable</li>
          <li>📈 Insights to Inform Business Decisions</li>
          <li>💰 Maximizes Revenue Through Decision-Making</li>
        </ul>
      </div>
 
      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">        <img
          src={dashbord}
          alt="Dashboard Insights"
          className="max-w-full h-auto"
        />
      </div>
      </div>
    </section>
  );
}

export default Portfolio;
