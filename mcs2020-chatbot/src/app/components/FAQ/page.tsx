"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

// Define FAQs
const faqs = [
  {
    id: "1",
    title: "How do I reset my password?",
    content:
      "To reset your password, go to the settings page and follow the instructions for password reset.",
  },
  {
    id: "2",
    title: "Where can I find the course materials?",
    content:
      "Course materials can be found under the Resources section on the course dashboard.",
  },
  {
    id: "3",
    title: "Who can I contact if I have technical issues?",
    content:
      "Please contact our support team via the Help Desk section. We are available 24/7.",
  },
  {
    id: "4",
    title: "What is the refund policy for this course?",
    content:
      "Our refund policy allows you to request a refund within the first 30 days of purchase.",
  },
];

export default function App() {
  return (
    <div className=" bg-blue-800">
      <div className="max-w-10xl container mx-auto px-4 py-8 bg-guelphRed">
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        {/* Sets Up Accordian for every key */}
        <Accordion selectionMode="multiple">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              aria-label={`Accordion ${faq.id}`}
              title={faq.title}
              style={{ textAlign: "center" }}
            >
              {faq.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
