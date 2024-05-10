"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import NavBar from "@/app/components/NavBar";
// Define FAQs
const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        id: "1",
        title: "What is a Hackathon?",
        content:
          "A hackathon is an event, typically lasting several days, where a large number of people meet to engage in collaborative computer programming.",
      },
      {
        id: "2",
        title: "Why should I come to HawkHacks?",
        content:
          "You should come to HawkHacks to innovate, create new technologies, meet new people, and win prizes!",
      },
      {
        id: "3",
        title: "How much does it cost?",
        content:
          "It's completely free! Thanks to our sponsors and support system.",
      },
    ],
  },
  {
    category: "Eligibility",
    faqs: [
      {
        id: "4",
        title: "Do I need to know how to code?",
        content:
          "No coding experience is necessary! We welcome participants from all backgrounds.",
      },
      {
        id: "5",
        title: "When can I apply?",
        content: "Application dates will be announced soon. Stay tuned!",
      },
    ],
  },
  {
    category: "Health & Safety",
    faqs: [
      {
        id: "6",
        title: "What are your COVID-19 regulations?",
        content:
          "We follow all local COVID-19 guidelines to ensure the safety of all participants.",
      },
    ],
  },
];

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
              <Accordion selectionMode="multiple">
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
    </div>
    </>
  );
}
