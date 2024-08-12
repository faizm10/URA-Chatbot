import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const PUBLIC_KEY = "C0pjgOv4eYlYZpMtI";
const SERVICE_ID = "service_y42rruj";
const TEMPLATE_ID = "template_7mccdmp";
export const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        console.log("SUCCESS!"); //testing purposes
        setSubmitted(true);
      },
      (error) => {
        console.log("FAILED...", error.text); //testing purposes
        setError("Failed to send the message. Please try again later.");
      }
    );
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  text-gray-800 ">
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
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {error && <p className="text-red-600">{error}</p>}
          <div className="flex flex-col">
            <label htmlFor="user_name" className="mb-2 font-bold text-gray-700">
              Your Name:
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="John Doe"
              required
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 font-bold"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="user_email"
              className="mb-2 font-bold text-gray-700"
            >
              Your Email:
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              placeholder="johndoe@gmail.com"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 font-bold"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-bold text-gray-700">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Enter your message here..."
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800"
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg font-bold text-white cursor-pointer"
          />
        </form>
      )}
    </div>
  );
};
