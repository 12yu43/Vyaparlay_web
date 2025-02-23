import React from "react";
import friend from '../images/clients/friend.png'

const FriendPayment = () => {
  return (
    <div className="bg-white min-h-60px flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900">
            A <span className="text-orange-500">Friend</span> Beyond Payments
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Having <strong>FrenzoPay</strong> as your preferred payments partner enables you to prioritize your core business activities whilst letting us take care of your payments system. What’s more, FrenzoPay offers a host of ready-to-use integrations and plug-ins to augment your website.
          </p>
          <p className="text-lg text-gray-700 mt-2">
            As a result, you are now in the safe and capable hands of <strong>India’s best instant payment gateway</strong>, one that enables you to quickly be in sale mode and ready to accept and process your customer payments right away!
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
            Know More →
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img 
            src={friend} 
            alt="FrenzoPay Illustration" 
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default FriendPayment;
