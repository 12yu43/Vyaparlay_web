import React from "react";
import  payment from '../images/clients/payment.png'

function Services() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 bg-white">
      {/* Left Side Content */}
      <div className="flex flex-col md:flex-row items-center py-12  px-6 md:px-16 flex-c">
  {/* Left Content */}
  <div className="md:w-1/2 flex flex-col justify-center align-items-center">
    <h2 className="text-3xl font-bold text-blue-800 mb-4">
      Multiple Payment Modes
    </h2>
    <p className="text-gray-600 mb-4">
      Vyaparlay's online payment gateway provides multiple payment methods, 
      offering your customers the best in terms of maximum conversions, 
      minimum abandoned carts, ease of checkout, wider demographic appeal, 
      and enhanced brand perception.
    </p>
    <p className="text-gray-600 mb-6">
      Vyaparlay is one of the{" "}
      <strong className="text-blue-700">best payment gateways for businesses</strong>, 
      and our multiple payment modes will enhance your customer's payment journey 
      and ensure overall revenue growth.
    </p>

    {/* Bullet Points */}
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800 font-medium">
      <li>✔ Maximum Conversions</li>
      <li>✔ Ease Of Checkout</li>
      <li>✔ Minimum Abandoned Carts</li>
      <li>✔ Wider Demographic Appeal</li>
      <li>✔ Enhanced Brand Perception</li>
    </ul>
  </div>

  {/* Right Side Image */}
  <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
    <img src={payment} alt="Payment Options" className="max-w-full h-auto" />
  </div>
</div>

    </section>
  );
}

export default Services;
