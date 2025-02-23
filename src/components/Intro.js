import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import cashless from '../images/cashless.png'
import power from '../images/power.png'


const features = [
  {
    title: 'Multiple Payment Modes',
    image: cashless,
    points: [
      'Maximum conversions',
      'Minimum abandoned carts',
      'Ease of checkout',
      'Wider demographic appeal',
      'Enhanced brand perception'
    ]
  },
  {
    title: 'Power - Packed Dashboard',
    image: power,
    points: [
      'Real-time data access',
      'Insights to inform business decisions',
      'Dynamic and customizable',
      'Maximizes revenue through informed decision-making'
    ]
  },
  {
    title: 'Best Industry Standard Security Compliance',
    icon: '🔒',
    points: [
      'Secure financial transactions',
      'Most secure payment gateway in India',
      'High security certifications',
      'Anti-fraud measures'
    ]
  },
  {
    title: 'No Tension and Stress-Free Onboarding',
    icon: '✅',
    points: [
      'Simple and efficient onboarding process',
      'Minimal documentation required',
      'Quick e-KYC process',
      'Start receiving payments immediately'
    ]
  }
];

function Intro() {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
             <img src={feature.image} alt={feature.title} className="w-16 h-16 object-contain text-blue-800" />
            <h3 className="text-xl font-semibold mb-3 text-blue-800">{feature.title}</h3>
            <ul className="text-blue-800">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaRegArrowAltCircleRight size={20} /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
