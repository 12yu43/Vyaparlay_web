import React from "react";

const paymentOptions = [
  {
    title: "Payment Gateway",
    description:
      "Go live quickly with FrenzoPay and experience the promise of the best payment gateway company in India. Experience hassle-free onboarding, easy and accessible integration, feature-rich checkout, and best-in-class speed of settlements.",
    link: "#",
  },
  {
    title: "Payment Links",
    description:
      "No Website? No Worries! Get Paid in Minutes with Frenzo PayLinks. Simple, easy & no coding required. Improve your cash flow with the best payment link solution for all businesses.",
    link: "#",
  },
  {
    title: "Payouts",
    description:
      "With Frenzo Payouts, you can expand your business while having peace of mind knowing your payments are secure and efficient. Transfer funds quickly and improve your cash flow.",
    link: "#",
  },
  {
    title: "Domestic Money Transfer",
    description:
      "FrenzoPay simplifies money transfers with fast and reliable domestic services. Send and receive funds effortlessly, ensuring your transactions are secure and convenient.",
    link: "#",
  },
  {
    title: "AePS",
    description:
      "With FrenzoPay AePS, customers can access Aadhaar-linked bank accounts and carry out standard banking operations such as checking balance, withdrawing cash, and sending money securely.",
    link: "#",
  },
  {
    title: "Bill Payments",
    description:
      "FrenzoPay Bill Payments is a platform on the BBPS system, allowing customers to pay utility bills for electricity, water, gas, DTH, broadband, and mobile services with ease.",
    link: "#",
  },
];

const PaymentsPartner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-24 text-white" style={{ clipPath: "polygon(0 8%, 100% 0, 100% 91%, 0% 100%)" }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">The Payments Partner You Need</h2>
        <p className="text-lg mt-2">
          Our Wide Range Of Payment Products Cater To All
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-6">
        {paymentOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg p-6 transition transform hover:scale-105"
          >
            <h3 className="text-lg font-bold text-blue-600">{option.title}</h3>
            <p className="text-gray-700 mt-2">{option.description}</p>
            <a href={option.link} className="text-blue-500 font-semibold mt-4 inline-block">
              Know More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentsPartner;
