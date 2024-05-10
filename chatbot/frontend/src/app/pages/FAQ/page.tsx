"use client";
import React from "react";
import { Accordion, AccordionItem, Textarea, Input } from "@nextui-org/react";
import NavBar from "@/app/components/NavBar";
// Define FAQs
const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        id: "1",
        title: "What is a Chatbot?",
        content:
          "N/A",
      },
      {
        id: "2",
        title: "Why should I use chatbot?",
        content:
        "N/A",      },
      {
        id: "3",
        title: "How much does it cost?",
        content:
          "It's completely free!",
      },
    ],
  },
  {
    category: "Issues/Bugs/Feedback",
    faqs: [
      {
        id: "4",
        title: "N/A",
        content:
        "N/A",
      },
      {
        id: "5",
        title: "N/A",
        content:"N/A",
      },
    ],
  },
  {
    category: "Add More",
    faqs: [
      {
        id: "6",
        title: "N/A",
        content:
        "N/A",
      },
    ],
  },
];
const radius = ["full", "lg", "md", "sm", "none"];
export default function App() {
  return (
    <>
      <NavBar />
      <div className=" bg-gradient-to-b from-SoftViolet to-SoftBlue py-10">
        <div className="max-w-7xl container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Frequently Asked Questions
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqCategories.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-lg shadow-lg p-6 text-black text-center"
              >
                <h2 className="text-2xl font-semibold mb-5">
                  {category.category}
                </h2>
                <Accordion selectionMode="multiple" variant="splitted">
                  {category.faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      title={faq.title}
                      className="text-m"
                      style={{
                        textAlign: "left",
                        padding: "15px",
                        border: "grey",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        color: "black",
                        backgroundColor: "transparent",
                      }}
                    >
                      <p className="text-md">{faq.content}</p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Let us know by submitting this form!
          </p>

          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
      </div>
    </>
  );
}
