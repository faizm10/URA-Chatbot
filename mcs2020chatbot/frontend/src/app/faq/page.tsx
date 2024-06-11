"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  Textarea,
  Input,
  Link,
} from "@nextui-org/react";
import NavBar from "@/components/NavBar";
import ContactUs from "@/components/ContactUs";

// Define FAQs
const faqCategories = [
  {
    category: "General Usage",
    faqs: [
      {
        title: "How do I start using the chatbot?",
        content:
          "To start using the chatbot, simply type your question or command into the chat input area and press enter.",
      },
      {
        title: "What can I ask the chatbot?",
        content:
          "You can ask the chatbot questions related to the course content. While it can understand natural language, keeping questions clear and to the point helps in getting accurate responses.",
      },
    ],
  },
  {
    category: "Troubleshooting and Errors",
    faqs: [
      {
        title: "What should I do if the chatbot doesn't understand my question",
        content:
          "Try rephrasing your question or use simpler, more direct language. Ensure that your questions are within the scope of the chatbot's capabilities.",
      },
      {
        title: "Why isn't the chatbot responding to my commands?",
        content:
          "Check your internet connection first. If the connection is fine, the chatbot may be undergoing maintenance. Try again later or contact support if the issue persists.",
      },
      {
        title: "How do I report a problem or bug in the chatbot?",
        content: "Go to Contact Us which is located below",
      },
      {
        title:
          "The chatbot gave an incorrect or unexpected answer. What should I do?",
        content:
          "Provide feedback if there's an option. Many chatbots improve over time by learning from user interactions.",
      },
    ],
  },
  {
    category: "Advanced Features",
    faqs: [
      {
        title: "Can the chatbot handle complex queries or follow-up questions?",
        content:
          "Currently, the chatbot can not handle complex queries or follow-up questions",
      },
    ],
  },
  {
    category: "Privacy and Security",
    faqs: [
      {
        title: "What information does the chatbot collect about me?",
        content:
          "The chatbot collects data from your interactions to improve responses and service.",
      },
      {
        title: "Is my conversation with the chatbot private?",
        content:
          "Yes, Conversations with chatbots are stored for analysis and improvement of the service.",
      },
    ],
  },
];
export default function App() {
  return (
    <>
      <NavBar />
      <div className=" bg-primary py-10">
        <div className="max-w-7xl container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Frequently Asked Questions
          </h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 ">
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
                      // key={faq.id}
                      title={faq.title}
                      className="text-m font-bold"
                      style={{
                        textAlign: "left",
                        padding: "15px",
                        border: "black",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        color: "black",
                        backgroundColor: "transparent",
                      }}
                    >
                      <p className="text-md font-normal">{faq.content}</p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-bold text-center text-white sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Let us know by submitting this form!
          </p>

          <div className="mb-8 lg:mb-16 font-bold text-center text-white sm:text-xl flex gap-4" >
            <Link
              isExternal
              href=""
              showAnchorIcon
            >
              Email
            </Link>
          </div> */}
          <ContactUs />
        </div>
      </div>
    </>
  );
}
