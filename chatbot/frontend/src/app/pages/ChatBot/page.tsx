"use client";
// Importing React and useState hook
import React, { useState } from "react";

// Importing custom components and styles
import NavBar from "@/app/components/NavBar";
import MessageList from "@/app/components/MessageList";
import InputField from "@/app/components/InputField";
// Define a type for the FAQ data structure
interface FAQ {
  question: string;
  answer: string;
}

// List of predefined questions and answers
const faqData: FAQ[] = [
  {
    question: "simulation assignments",
    answer:
      "Simulation assignments are due at the end of weeks 1, 3, 6, 8, and 10. You can submit these via the MyLab platform.",
  },
  {
    question: "excel assignments",
    answer:
      "Excel assignments need to be submitted through MyLab. They are scheduled for weeks 2, 4, 7, 9, and 11.",
  },
  {
    question: "quiz schedule",
    answer:
      "Quizzes are scheduled for weeks 1, 3, 5, 8, 10, and 11. These can be accessed via the Quizzes tool on CourseLink.",
  },
  {
    question: "final exam format",
    answer:
      "The final exam will be conducted online and consists of multiple-choice questions. Make sure to check the final exam schedule on WebAdvisor.",
  },
  {
    question: "discussion posts",
    answer:
      "You need to post your initial discussion by Thursday 11:59 PM ET of the assignment week and respond to a classmate's post by Sunday 11:59 PM ET.",
  },
  {
    question: "contact the instructor",
    answer:
      "You can email the instructor at mccallun@uoguelph.ca for detailed queries or book an appointment for office hours.",
  },
  {
    question: "textbook",
    answer:
      "The required textbook is 'Management Information Systems: Managing the Digital Firm'. You can use the MyLab platform for digital resources.",
  },
  {
    question: "mylab assignments",
    answer:
      "All MyLab assignments are crucial for your course performance. Make sure to complete these on time as per the given deadlines.",
  },
];

// ChatBot component definition
const ChatBot = () => {
  // State to store messages
  const [messages, setMessages] = useState<
    { text: string; sender: "bot" | "user" }[]
  >([{ text: "Hello! How can I assist you today?", sender: "bot" }]);

  // State to handle input value from the user
  const [inputValue, setInputValue] = useState<string>("");

  // Function to handle sending of messages
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Adding user message to the messages array
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      handleBotResponse(inputValue);
    }
  };

  // Function to handle bot responses
  const handleBotResponse = (input: string) => {
    // Searching for a response from FAQ data
    const response =
      faqData.find((faq) =>
        input.toLowerCase().includes(faq.question.toLowerCase())
      )?.answer || "I'm not sure how to help with that.";
    // Adding bot response to the messages array
    setMessages((msgs) => [...msgs, { text: response, sender: "bot" }]);
  };

  return (
    <>
      <NavBar />
      <section className="bg-gradient-to-b from-SoftViolet to-SoftBlue  py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
          <div className="bg-white p-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              ChatBot
            </h2>
            <p className="text-gray-600 text-center mb-6">
              This Bot Is Currently Under Development. Head To FAQ If Issue/Bugs
              Appears
            </p>
            <MessageList messages={messages} />
            <InputField
              inputValue={inputValue}
              setInputValue={setInputValue}
              onSend={handleSendMessage}
            />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-SoftViolet to-SoftBlue  py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
          <div className="bg-white p-6">
            <h1 className="text-2xl text-black font-bold text-center">
              Questions to Asks:
            </h1>
            <ol className="text-black">
              <li>simulation assignments</li>
              <li>discussion posts</li>
              <li>excel assignments</li>

              <li>quiz schedule</li>
              <li>final exam format</li>
              <li>textbook</li>
              <li>contact the instructor</li>
              <li>mylab assignments</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatBot;
