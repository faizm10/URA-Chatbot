'use client'
import React, { useState } from "react";

// Define a type for question-answer pairs
interface FAQ {
  question: string;
  answer: string;
}

// List of predefined questions and answers
const faqData: FAQ[] = [
  {
    question: "simulation assignments",
    answer: "Simulation assignments are due at the end of weeks 1, 3, 6, 8, and 10. You can submit these via the MyLab platform.",
  },
  {
    question: "excel assignments",
    answer: "Excel assignments need to be submitted through MyLab. They are scheduled for weeks 2, 4, 7, 9, and 11.",
  },
  {
    question: "quiz schedule",
    answer: "Quizzes are scheduled for weeks 1, 3, 5, 8, 10, and 11. These can be accessed via the Quizzes tool on CourseLink.",
  },
  {
    question: "final exam format",
    answer: "The final exam will be conducted online and consists of multiple-choice questions. Make sure to check the final exam schedule on WebAdvisor.",
  },
  {
    question: "discussion posts",
    answer: "You need to post your initial discussion by Thursday 11:59 PM ET of the assignment week and respond to a classmate's post by Sunday 11:59 PM ET.",
  },
  {
    question: "contacting the instructor",
    answer: "You can email the instructor at mccallun@uoguelph.ca for detailed queries or book an appointment for office hours.",
  },
  {
    question: "textbook information",
    answer: "The required textbook is 'Management Information Systems: Managing the Digital Firm'. You can use the MyLab platform for digital resources."
  },
  {
    question: "mylab assignments",
    answer: "All MyLab assignments are crucial for your course performance. Make sure to complete these on time as per the given deadlines."
  }
];


const ChatBot = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  // Function to send a message

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      handleBotResponse(inputValue);
    }
  };
  // Function to generate the bot's response

  const handleBotResponse = (input: string) => {
    // Find a response from the FAQ data
    const response = faqData.find((faq) => input.includes(faq.question))?.answer || "I'm not sure how to help with that.";
    setMessages((messages) => [...messages, { text: response, sender: "bot" }]);
  };
  // Function to handle input change

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  // Function to handle key down event (Enter key)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-4">
  {/* Container for the ChatBot component */}
  <div className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
    {/* Header section */}
    <div className="bg-white p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        ChatBot
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Ask me anything about the course content! I'm here to help you.
      </p>
      
      {/* Message display area */}
      <div className="bg-black p-4 h-96 overflow-y-auto">
        {/* goin through messages to display */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-end ${
              message.sender === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs lg:max-w-md ${
                message.sender === "user"
                  ? "bg-yellow-500 text-white"
                  : "bg-red-900 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      
      {/* Input field and send button */}
      <div className="p-4">
        <div className="flex items-center space-x-4">
          {/* Input field for user messages */}
          <input
            type="text"
            className="flex-1 p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none text-black"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          
          {/* Button to send user message */}
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ChatBot;
