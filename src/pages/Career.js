import React from "react";
import { FaArrowRight } from "react-icons/fa";
import NavBar from "../components/Navbar/NavBar";
import career from '../images/clients/career.jpg'
import Footer from "../components/Footer";

const Career = () => {

    const jobListings = [
        {
            title: "Regional Sales Management",
            description:
                "Identifying and acquiring new customers, as well as up-selling to existing customer bases across the region. Effectively managing and driving the sales cycle from prospection through to successful closure. Building strong relationships with key accounts in the region.",
            requirements: [
                "Create regional sales plans and quotas in alignment with business objectives",
                "Report on regional sales results",
                "Prepare and review the annual budget for the area of Responsibility",
                "Forecast quarterly and annual profits",
            ],
        },
        {
            title: "SEO Specialist",
            description:
                "We are looking for an SEO/SEM expert to manage all search engine optimization and marketing activities. You will be responsible for managing all SEO activities such as content strategy, link building, and keyword strategy to increase rankings on all major search networks.",
            requirements: [
                "Proven SEO experience",
                "Solid understanding of performance marketing, conversion, and online customer acquisition",
                "In-depth experience with website analytics tools (e.g., Google Analytics, NetInsight, Omniture, WebTrends)",
            ],
        },
        {
            title: " Recruitment Executive",
            description:
                "We are looking for a professional Executive Recruiter to source candidates on behalf of our clients for highly specialised positions. The successful candidate will be able to attract first-rate talent and to ensure lasting and successful placements. The goal is to exceed clients’ expectations and to add value to their business.",
            requirements: [
                "Proven working experience in recruiting",
                " Proficiency in using applicant tracking systems (ATS), recruiting software and candidate databases",
                "Previous experience with candidate sourcing tools and methods",
            ],
        },
        {
            title: "Sales Executive",
            description:
                "We are looking for a competitive and trustworthy Sales Executive to help us build up our business activities. Sales Executive responsibilities include discovering and pursuing new sales prospects, negotiating deals and maintaining customer satisfaction. If you have excellent communication skills and feel comfortable reaching out to potential customers to demonstrate our services and products through email and phone, we’d like to meet you. Ultimately, you’ll help us meet and surpass business expectations and contribute to our company’s rapid and sustainable growth.",
            requirements: [
                "Proven experience as a Sales Executive or relevant role through cold calling, networking and social media",
                " Thorough understanding of marketing and negotiating techniques",
                "Aptitude in delivering attractive presentations",
            ],
        },
    ];

    return (
        <><div>
            <NavBar />
        </div>
            <div className="font-sans py-14">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 text-center relative">
                    <h1 className="text-4xl font-bold">Careers</h1>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-9xl text-white opacity-10">
                        Careers
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src={career}
                        alt="FrenzoPay Illustration"
                        className="w-full h-[40vh] object-cover"
                    />
                </div>
                <div className="max-w-6xl mx-auto py-12 text-center">
                    <h2 className="text-2xl font-bold text-blue-700">Why work at FrenzoPay?</h2>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-blue-700">
                            <h3 className="text-lg font-semibold text-blue-700">
                                Opportunities to work on innovative projects
                            </h3>
                            <p className="text-gray-600 mt-2">
                                FrenzoPay is known for its innovative payment solutions that leverage the latest
                                technologies. You will have the opportunity to work on groundbreaking projects.
                            </p>
                            <a href="#" className="text-blue-600 flex items-center mt-3">
                                Read More <FaArrowRight className="ml-2" />
                            </a>
                        </div>

                        <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-blue-700">
                            <h3 className="text-lg font-semibold text-blue-700">
                                A supportive and collaborative work environment
                            </h3>
                            <p className="text-gray-600 mt-2">
                                FrenzoPay fosters a culture of collaboration, respect, and teamwork, encouraging
                                employees to share ideas and innovate.
                            </p>
                            <a href="#" className="text-blue-600 flex items-center mt-3">
                                Read More <FaArrowRight className="ml-2" />
                            </a>
                        </div>

                        <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-blue-700">
                            <h3 className="text-lg font-semibold text-blue-700">
                                Opportunities for professional growth and development
                            </h3>
                            <p className="text-gray-600 mt-2">
                                We invest in the growth and development of our employees, providing training,
                                mentorship, and career advancement.
                            </p>
                            <a href="#" className="text-blue-600 flex items-center mt-3">
                                Read More <FaArrowRight className="ml-2" />
                            </a>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-blue-700">
                            <h3 className="text-lg font-semibold text-blue-700">
                                A chance to make a positive impact on society
                            </h3>
                            <p className="text-gray-600 mt-2">
                                FrenzoPay is committed to making a positive impact by providing financial solutions
                                that empower businesses and individuals.
                            </p>
                            <a href="#" className="text-blue-600 flex items-center mt-3">
                                Read More <FaArrowRight className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white min-h-screen p-6">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-blue-700 border-b-4 border-blue-400 inline-block pb-2">
                        Open Positions at Frenzopay
                    </h1>
                </div>

                <div className="max-w-6xl mx-auto space-y-6 p-5">
                    {jobListings.map((job, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 p-6 rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-6"
                        >
                            <div>
                                <h2 className="text-xl font-semibold text-blue-800 flex items-center">
                                    <span className="mr-2">👤</span> {job.title}
                                </h2>
                                <p className="text-gray-700 mt-2">{job.description}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-blue-700">Requirements</h3>
                                <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                                    {job.requirements.map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-center text-blue-700">
        Think you have what it takes?
      </h1>
      <h2 className="text-lg font-semibold text-center text-blue-700">
        Send us your resume
      </h2>

      <div className="bg-[#f3f8fe] shadow-md rounded-lg p-6 mt-6 w-full max-w-4xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="First Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Phone"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Position you are applying to
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Position"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Available Start Date</label>
            <input
              type="date"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Upload Resume */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
            <input
              type="file"
              className="mt-1 w-full border rounded-md p-2 file:bg-blue-600 file:text-white file:px-3 file:py-1 file:rounded-md file:border-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
            <Footer />
        </>
    );
};

export default Career;
