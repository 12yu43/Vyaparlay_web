import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const blogs = [
  {
    id: 1,
    title: "The UPI Revolution in India: A Game-Changer for Digital Payments",
    description:
      "India’s digital payment landscape has experienced a massive transformation in recent years...",
    image: "https://via.placeholder.com/300",
    author: "Frenzopay",
    date: "16-01-25",
  },
  {
    id: 2,
    title: "assd",
    description: "",
    image: "https://via.placeholder.com/300",
    author: "admin",
    date: "14-02-25",
  },
  {
    id: 3,
    title: "asd",
    description: "",
    image: "https://via.placeholder.com/300",
    author: "admin",
    date: "14-02-25",
  },
];

const Blogs = () => {
  return (
   <><div>
          <NavBar />
      </div><div className="min-h-screen bg-gray-100 py-14">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-10">
                  <h1 className="text-4xl font-bold">Blogs</h1>
              </div>

              {/* Blog Section */}
              <div className="max-w-6xl mx-auto py-10 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {blogs.map((blog) => (
                          <div
                              key={blog.id}
                              className="bg-white shadow-lg rounded-lg overflow-hidden"
                          >
                              <img
                                  src={blog.image}
                                  alt={blog.title}
                                  className="w-full h-48 object-cover" />
                              <div className="p-4">
                                  <p className="text-sm text-gray-600 flex items-center">
                                      <span className="mr-2">👤 {blog.author}</span> 📅 {blog.date}
                                  </p>
                                  <h2 className="text-lg font-bold mt-2">{blog.title}</h2>
                                  <p className="text-gray-600 text-sm mt-2">
                                      {blog.description || "No description available."}
                                  </p>
                                  <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                                      Read More
                                  </button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
          <Footer /></>
  );
};

export default Blogs;
