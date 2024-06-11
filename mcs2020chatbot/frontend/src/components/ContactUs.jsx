"use client";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server
    console.log("Form data", formData);

    setSubmitted(true);
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-primary text-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Let
        us know by submitting this form!
      </p>

      {submitted ? (
        <p className="text-center text-green-800">
          Thank you for your message. We will get back to you soon!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-bold ">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-black font-bold"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-bold">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="johndoe@gmail.com"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-black font-bold"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-bold">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Enter your message here..."
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg font-bold text-white"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
