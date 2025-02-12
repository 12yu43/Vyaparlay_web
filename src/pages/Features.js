import React from "react";
import { FaCreditCard, FaShoppingCart, FaShieldAlt, FaBolt, FaSync, FaKey, FaNetworkWired, FaLock } from "react-icons/fa";

const features = [
  {
    icon: <FaCreditCard className="text-2xl text-white" />,
    title: "Multiple Payment Modes",
    description: "Accept payments via Credit Cards, Debit Cards, Wallets, UPI, IMPS, NEFT, and RTGS.",
  },
  {
    icon: <FaKey className="text-2xl text-white" />,
    title: "Multiple Access Modes",
    description: "Access the payment gateway via link-based methods, without needing a website or app.",
  },
  {
    icon: <FaNetworkWired className="text-2xl text-white" />,
    title: "Savings on Infrastructure",
    description: "Save on security and payment infrastructure costs to focus on your core business.",
  },
  {
    icon: <FaBolt className="text-2xl text-white" />,
    title: "Super Fast Settlements",
    description: "Quick settlement cycles ensure payments are credited to your account swiftly.",
  },
  {
    icon: <FaSync className="text-2xl text-white" />,
    title: "Automated Reconciliation",
    description: "Ensures accuracy in transactions, settlements, and refunds with advanced MIS monitoring.",
  },
  {
    icon: <FaShoppingCart className="text-2xl text-white" />,
    title: "Pre Integrated Carts",
    description: "Integrates seamlessly with Shopify, WooCommerce, and other platforms for easy setup.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-white" />,
    title: "Secure Technology",
    description: "PCI-DSS 3.2.1 compliant security ensures customer data privacy and protection.",
  },
  {
    icon: <FaLock className="text-2xl text-white" />,
    title: "Risk Mitigation",
    description: "Fraud detection and risk mitigation with advanced checks on velocity, IP, and duplication.",
  },
];

const Features = () => {
  return (
    <div className="bg-blue-900 text-white py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="text-gray-300 text-sm mt-2">
          Power Pack Features That Elevate Your Business
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20 mt-10">
        {features.map((feature, index) => (
          <div key={index} className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
