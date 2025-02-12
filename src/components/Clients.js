import React, { useState } from "react";

const faqs = [
  { question: "Q:What is a Payment Gateway?", answer: "A payment gateway is a technology that facilitates online transactions securely." },
  { question: " Q:Why should I choose Vyaparlay Payment Gateway?", answer: "Vyaparlay provides secure, fast, and seamless transactions with advanced features." },
  { question: " Q: What are the benefits of Vyaparlay Payment Gateway?", answer: "It offers real-time analytics, multiple payment modes, and secure transactions." },
  { question: "Q: How can I start using Vyaparlay?", answer: "You can sign up on our website and integrate our API into your platform." },
  { question: "Q: What Payment modes are available with Vyaparlay?", answer: "Credit cards, debit cards, net banking, UPI, and wallets are supported." },
  { question: "Q: What Platforms are Supported by the Vyaparlay Payment Gateway?", answer: "It supports websites, mobile apps, and POS systems." },
  { question: "Q: How Secure is Vyaparlay Payment Gateway?", answer: "We use end-to-end encryption and comply with PCI-DSS standards." },
  { question: "Q: When will the merchant receive settlement money in his bank account?", answer: "Settlements typically occur within 24-48 hours." },
  { question: "Q: Can I Get custom-made pricing for my business?", answer: "Yes, we offer flexible pricing plans based on your business needs." },
  { question: "Q: Is Vyaparlay Safe?", answer: "Absolutely! We prioritize security with advanced fraud detection measures." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-blue-800 font-bold">{faq.question}</span>
              <span className="text-xl text-blue-800 font-bold">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
